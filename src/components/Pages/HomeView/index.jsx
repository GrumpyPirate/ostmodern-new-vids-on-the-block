// React
import React, { Component, Fragment } from "react";

// Utils
import { sets } from "../../../config/contentSettings";

// Components
import EpisodeList from "./EpisodeList";
import EpisodeListItem from "./EpisodeListItem";
import Spinner from "../../Layout/Spinner";
import Container from "../../Layout/Container";
import withContentService from "../../HOCs/withContentService";

// Define components
class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      hasFailed: false,
      feedback: null,
      episodes: [],
      dividers: []
    };
  } // /constructor

  getHomeSet() {
    this.setState({
      isLoading: true,
      hasFailed: false,
      feedback: null
    });
    this.props.contentService
      .getSetItems(sets.home)
      .then(res => {
        const sortByPosition = (objA, objB) => objA.position - objB.position;
        const { objects } = res;

        // Sort dividers and episodes ascending, by 'position'
        const dividers = objects
          .filter(object => object.content_type === "divider")
          .sort(sortByPosition);
        const episodes = objects
          .filter(object => object.content_type === "episode")
          .sort(sortByPosition);

        this.setState({ dividers, episodes });
      })
      .catch(err => {
        console.log("Error fetching set:", err);

        this.setState({
          hasFailed: true,
          feedback: `Couldn't fetch set: ${err}`
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  } // /getHomeSet

  // Lifecycle
  componentDidMount() {
    this.getHomeSet();
  }

  render() {
    const { episodes } = this.state;

    return (
      <Fragment>
        <Spinner isLoading={this.state.isLoading} />

        {!!episodes.length && (
          <Container>
            <EpisodeList>
              {episodes.map(episode => (
                <EpisodeListItem key={episode.uid} episode={episode} />
              ))}
            </EpisodeList>
          </Container>
        )}
      </Fragment>
    );
  } // /render
} // /class HomeView

export default withContentService(HomeView);
