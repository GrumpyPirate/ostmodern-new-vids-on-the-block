// React
import React from "react";
import PropTypes from "prop-types";

// Vendor
import styled from "styled-components";

// Utils
import { rem } from "../../../../utilities";

// Components
import Heading from "../../../Typography/Heading";

// Styles
import theme from "../../../../styles/theme";
import { mdUp } from "../../../../styles/mediaQueries";

// Define components
const EpisodeListItemTitle = ({ className, children }) => (
  <Heading
    level={2}
    displayLevel={6}
    className={className}
    style={{ marginBottom: 0 }}
  >
    {children}
  </Heading>
);

// Type checking
EpisodeListItemTitle.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default styled(EpisodeListItemTitle)`
  position: relative;
  height: ${rem(56)};
  padding: 0.5rem;
  color: ${theme.colors.shadeLight};
  background-color: ${theme.colors.mainBrand};
  margin: 0;

  @media ${mdUp} {
    height: ${rem(76)};
  }
`;
