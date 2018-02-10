// Vendor
import styled from "styled-components";
import { Link } from "react-router-dom";

// Utils
import { rem } from "../../../utilities";

// Styles
import theme from "../../../styles/theme";
import { lgUp } from "../../../styles/mediaQueries";

// Define component
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

export default Brand;
