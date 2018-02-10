// React
import React from "react";
import PropTypes from "prop-types";

// Vendor
import styled from "styled-components";

// Styles
import { smUp } from "../../../../styles/mediaQueries";

// Define component
const EpisodeList = ({ className, children }) => (
  <ul className={className}>{children}</ul>
);

// Type checking
EpisodeList.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default styled(EpisodeList)`
  list-style: none;
  padding: 0;
  margin-right: -0.5rem;
  margin-left: -0.5rem;

  @media ${smUp} {
    display: flex;
    flex-wrap: wrap;
  }
`;
