// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Vendor
import styled from "styled-components";

// Utils
import { rem } from "../../../../utilities";

// Components
import Spinner from "../../../Layout/Spinner";

// Styles
import theme from "../../../../styles/theme";

// Define components
const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

class EpisodeDetailMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false
    };

    this.randomNo = Math.floor(Math.random() * 1084);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  } // /constructor

  handleImageLoad() {
    this.setState({ hasLoaded: true });
  }

  // Lifecycle
  render() {
    return (
      <figure className={this.props.className}>
        <Spinner
          isLoading={!this.state.hasLoaded}
          backgroundColor={theme.colors.accentLight}
        />

        <Image
          src={`https://picsum.photos/400/300/?image=${this.randomNo}`}
          onLoad={this.handleImageLoad}
        />
      </figure>
    );
  } // /render
} // /class EpisodeDetailMedia

// Type checking
EpisodeDetailMedia.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(EpisodeDetailMedia)`
  position: relative;
  min-height: ${rem(240)};
  color: ${theme.colors.shadeLight};
  overflow: hidden;
`;
