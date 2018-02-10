// React
import React, { Component } from "react";

// Vendor
import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-svg";

// Config
import settings from "../../config/appSettings";

// Utils
import { rem } from "../../utilities";

// Components
import Container from "../Layout/Container";

// Styles
import theme from "../../styles/theme";
import { lgUp } from "../../styles/mediaQueries";

// Images
import Cassette from "../../images/cassette.svg";

// Define Header
const Brand = styled(Link)`
  display: inline-block;
  font-family: ${theme.type.headings.fontStack};
  font-weight: ${theme.type.headings.fontWeight};
  font-size: ${rem(theme.type.headings.h6.fontSize.xs)};
  text-transform: uppercase;
  color: ${theme.colors.accentDark};

  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.mainBrand};
  }

  @media ${lgUp} {
    font-size: ${rem(theme.type.headings.h6.fontSize.lg)};
  }
`;

const imgSize = 6;
const BrandImage = styled(({ className }) => {
  return (
    <figure className={className}>
      <SVG path={Cassette} />
    </figure>
  );
})`
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

class Header extends Component {
  render() {
    return (
      <header className={this.props.className}>
        <Container>
          <Brand to="/">
            <BrandImage />
            {settings.appName}
          </Brand>
        </Container>
      </header>
    );
  } // /render()
} // /class Header extends React.Component

export default styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rem(theme.elements.header.height.xs)};
  background-color: ${theme.colors.accentLight};
  color: ${theme.colors.shadeLight};
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.4);
  z-index: 1;

  @media ${lgUp} {
    height: ${rem(theme.elements.header.height.lg)};
  }
`;
