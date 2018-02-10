// React
import React, { Component } from "react";

// Vendor
import styled from "styled-components";

// Config
import settings from "../../config/appSettings";

// Utils
import { rem } from "../../utilities";

// Components
import Brand from "./Brand";
import BrandImage from "./BrandImage";
import Container from "../Layout/Container";

// Styles
import theme from "../../styles/theme";
import { lgUp } from "../../styles/mediaQueries";

// Define component
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
