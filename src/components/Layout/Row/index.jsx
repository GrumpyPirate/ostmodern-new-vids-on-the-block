// Utils
import { rem } from "../../../utilities";
import { lgUp } from "../../../styles/mediaQueries";

// Vendor
import styled from "styled-components";

// Styles
import theme from "../../../styles/theme";

// Define components
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${rem(theme.grid.gutter.xs / -2)};
  margin-left: ${rem(theme.grid.gutter.xs / -2)};

  @media ${lgUp} {
    margin-right: ${rem(theme.grid.gutter.lg / -2)};
    margin-left: ${rem(theme.grid.gutter.lg / -2)};
  }

  ${props =>
    props.centred &&
    `
    align-items: center;
  `};
`;

export default Row;
