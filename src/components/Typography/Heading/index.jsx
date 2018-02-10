// React
import React from "react";
import PropTypes from "prop-types";

// Utils
import { rem } from "../../../utilities";

// Vendor
import styled, { css } from "styled-components";

// Styles
import theme from "../../../styles/theme";
import { lgUp } from "../../../styles/mediaQueries";

const Heading = ({ level = 2, displayLevel, children, ...props }) => {
  const commonHeadingStyles = css`
    text-transform: uppercase;
    font-family: ${theme.type.headings.fontStack};
    font-weight: ${theme.type.headings.fontWeight};
    margin: 0 0 ${rem(theme.verticalRhythm)};
  `;

  const dLevel = displayLevel || level;
  // Default to h1 settings, if a specified heading level doesn't exist
  const options = theme.type.headings.hasOwnProperty(`h${dLevel}`)
    ? theme.type.headings[`h${dLevel}`]
    : theme.type.headings.h2;

  const Styled = styled[`h${level}`]`
    ${commonHeadingStyles};
    font-size: ${rem(options.fontSize.xs)};

    @media ${lgUp} {
      font-size: ${rem(options.fontSize.lg)};
    }
  `;

  return <Styled {...props}>{children}</Styled>;
};

// PropTypes
Heading.propTypes = {
  level: PropTypes.number,
  displayLevel: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Heading;
