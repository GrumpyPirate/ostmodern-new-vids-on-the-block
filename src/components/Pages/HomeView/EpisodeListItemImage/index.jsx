// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Vendor
import styled from "styled-components";

// Components
import Spinner from "../../../Layout/Spinner";
import withContentService from "../../../HOCs/withContentService";

// Styles
import theme from "../../../../styles/theme";

// Define components
const Image = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  max-width: none;
  transform: translate(-50%, -50%);
`;

class EpisodeListItemImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      hasFailed: false,
      hasLoaded: false,
      feedback: null,
      imageURL: null
    };

    this.randomNo = Math.floor(Math.random() * 1084);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  } // /constructor

  handleImageLoad() {
    this.setState({ hasLoaded: true });
  }

  getImage() {
    const { imageEndpoint } = this.props;

    this.setState({
      isLoading: true,
      hasFailed: false,
      feedback: null
    });
    this.props.contentService
      .getUrl(imageEndpoint)
      .then(res => {
        this.setState({
          imageURL: res.url
        });
      })
      .catch(err => {
        console.log("Error fetching episode image:", err);

        this.setState({
          hasFailed: true,
          feedback: `Couldn't get episode image.`
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  } // /getImage

  // Lifecycle
  componentDidMount() {
    // fetch episode details...
    if (!!this.props.image) {
      this.getImage();
    }
  } // /componentDidMount

  render() {
    const { imageURL } = this.state;

    return (
      <figure className={this.props.className}>
        <Spinner
          isLoading={!this.state.hasLoaded}
          backgroundColor={theme.colors.accentLight}
        />

        {!!imageURL ? (
          <Image src={imageURL} onLoad={this.handleImageLoad} />
        ) : (
          <Image
            src={`https://picsum.photos/400/300/?image=${this.randomNo}`}
            onLoad={this.handleImageLoad}
          />
        )}
      </figure>
    );
  } // /render
} // /class EpisodeListItemImage

// Type checking
EpisodeListItemImage.propTypes = {
  className: PropTypes.string.isRequired,
  contentService: PropTypes.object.isRequired,
  image: PropTypes.string
};

export default withContentService(styled(EpisodeListItemImage)`
  position: relative;
  margin: 0;
  flex: 1 1 auto;
  color: ${theme.colors.shadeLight};
  overflow: hidden;
`);
