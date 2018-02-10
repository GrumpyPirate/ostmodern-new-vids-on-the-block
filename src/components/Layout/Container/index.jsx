// Utils
import { rem } from "../../../utilities";
import { lgUp } from "../../../styles/mediaQueries";

// Vendor
import styled from "styled-components";

// Styles
import theme from "../../../styles/theme";

// Define components
const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${rem(theme.grid.maxWidth)};
  margin-right: auto;
  margin-left: auto;
  padding-right: ${rem(theme.grid.gutter.xs / 2)};
  padding-left: ${rem(theme.grid.gutter.xs / 2)};

  @media ${lgUp} {
    padding-right: ${rem(theme.grid.gutter.lg / 2)};
    padding-left: ${rem(theme.grid.gutter.lg / 2)};
  }
`;

export default Container;
