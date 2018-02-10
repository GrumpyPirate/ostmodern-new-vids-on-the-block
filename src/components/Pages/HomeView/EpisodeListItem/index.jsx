// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Router
import { Link } from "react-router-dom";

// Vendor
import styled from "styled-components";

// Utils
import { rem } from "../../../../utilities";

// Components
import EpisodeListItemImage from "../EpisodeListItemImage";
import EpisodeListItemTitle from "../EpisodeListItemTitle";
import Spinner from "../../../Layout/Spinner";
import withContentService from "../../../HOCs/withContentService";

// Styles
import theme from "../../../../styles/theme";
import { smUp, mdUp } from "../../../../styles/mediaQueries";

// Define components
const StyledLink = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  overflow: hidden;
`;

class EpisodeListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasFailed: false,
      feedback: null,
      episodeDetail: null
    };
  } // /constructor

  getEpisodeDetails() {
    const { content_url, uid } = this.props.episode;

    this.setState({
      isLoading: true,
      hasFailed: false,
      feedback: null
    });
    this.props.contentService
      .getUrl(content_url)
      .then(res => {
        this.setState({
          episodeDetail: res
        });
      })
      .catch(err => {
        console.log("Error fetching episode:", err);

        this.setState({
          hasFailed: true,
          feedback: `Couldn't fetch episode ${uid}: ${err}`
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  } // /getEpisodeDetails

  // Lifecycle
  componentDidMount() {
    // fetch episode details...
    this.getEpisodeDetails();
  }

  render() {
    const { episodeDetail } = this.state;

    return (
      <li className={this.props.className}>
        <Spinner
          isLoading={this.state.isLoading}
          backgroundColor="transparent"
        />

        {!!episodeDetail && (
          // Pass through the episodeDetail to the resulting Route,
          // to save on API calls
          <StyledLink
            to={{
              pathname: `/episodes/${episodeDetail.slug}`,
              state: { episodeDetail }
            }}
          >
            <EpisodeListItemImage
              imageEndpoint={episodeDetail.image_urls.slice(0, 1)[0]}
            />
            <EpisodeListItemTitle>{episodeDetail.title}</EpisodeListItemTitle>
          </StyledLink>
        )}
      </li>
    );
  } // /render
} // /class EpisodeListItem

// Type checking
EpisodeListItem.propTypes = {
  className: PropTypes.string.isRequired,
  contentService: PropTypes.object.isRequired,
  episode: PropTypes.shape({
    content_type: PropTypes.string.isRequired,
    // "episode"
    content_url: PropTypes.string.isRequired,
    // "/api/episodes/film_7a99b420e91e4513ac56cf12f3fb82f8/"
    position: PropTypes.number.isRequired,
    // 30
    schedule_url: PropTypes.string.isRequired,
    // "/api/schedules/sche_aeba759af1f44c9ca75564c363c870b6/"
    self: PropTypes.string.isRequired,
    // "/api/sets/coll_e8400ca3aebb4f70baf74a81aefd5a78/items/sche_a40cf601ef2145fb8e4d7f372dda93ed/"
    set_url: PropTypes.string.isRequired,
    // "/api/sets/coll_e8400ca3aebb4f70baf74a81aefd5a78/"
    uid: PropTypes.string.isRequired
    // "sche_a40cf601ef2145fb8e4d7f372dda93ed"
  }).isRequired
};

export default withContentService(styled(EpisodeListItem)`
  position: relative;
  margin: 0 0 1rem;
  min-height: ${rem(240)};
  height: 25vmax;
  background-color: ${theme.colors.accentLight};
  background-clip: content-box;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  @media ${smUp} {
    flex: 1 1 50%;
    max-width: 50%;
  }

  @media ${mdUp} {
    flex-basis: 33.333%;
    max-width: 33.333%;
  }
`);
