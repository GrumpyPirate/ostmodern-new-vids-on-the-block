// Utils
import { rem } from "../../../utilities";
import { smUp, mdUp, lgUp, xlUp } from "../../../styles/mediaQueries";

// Vendor
import styled from "styled-components";

// Styles
import theme from "../../../styles/theme";

const getWidth = colSpan => `${colSpan / theme.grid.cols * 100}%`;

// Define components
const Column = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: ${rem(theme.grid.gutter.xs / 2)};
  padding-left: ${rem(theme.grid.gutter.xs / 2)};

  @media ${lgUp} {
    padding-right: ${rem(theme.grid.gutter.lg / 2)};
    padding-left: ${rem(theme.grid.gutter.lg / 2)};
  }

  ${props =>
    !!props.sm &&
    `
    @media ${smUp} {
      flex-basis: ${getWidth(props.sm)};
      max-width: ${getWidth(props.sm)};
    }
  `}

  ${props =>
    !!props.md &&
    `
    @media ${mdUp} {
      flex-basis: ${getWidth(props.md)};
      max-width: ${getWidth(props.md)};
    }
  `}

  ${props =>
    !!props.lg &&
    `
    @media ${lgUp} {
      flex-basis: ${getWidth(props.lg)};
      max-width: ${getWidth(props.lg)};
    }
  `}

  ${props =>
    !!props.xl &&
    `
    @media ${xlUp} {
      flex-basis: ${getWidth(props.xl)};
      max-width: ${getWidth(props.xl)};
    }
  `}
`;

export default Column;
