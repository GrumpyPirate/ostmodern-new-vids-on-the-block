// React
import React from "react";

// Vendor
import styled from "styled-components";
import SVG from "react-svg";

// Images
import Cassette from "../../../images/cassette.svg";

// Define component
const imgSize = 6;
const BrandImage = styled(({ className }) => (
  <figure className={className}>
    <SVG path={Cassette} />
  </figure>
))`
  display: inline-block;
  margin: -${imgSize / 2}em 0.5rem -${imgSize / 2}em -${imgSize / 2}em;
  vertical-align: middle;

  svg {
    display: block;
    width: ${imgSize}em;
    height: ${imgSize}em;
    fill: currentColor;
  }
`;

export default BrandImage;
