// React
import React from "react";
import PropTypes from "prop-types";

// Vendor
import SVG from "react-svg";
import styled, { keyframes } from "styled-components";

// Utils
import { rem } from "../../../utilities";

// Images
import spinnerSVG from "./spinner.svg";

// Styles
import theme from "../../../styles/theme";

const Spinner = ({
  className,
  isLoading,
  small,
  light,
  alignment,
  backgroundColor
}) => {
  return (
    <div
      className={className}
      aria-hidden={!isLoading}
      aria-label="Loading..."
      role="status"
      style={{
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? "visible" : "hidden"
      }}
    >
      <SVG path={spinnerSVG} wrapperClassName="svg-wrapper" />
    </div>
  );
};

// PropTypes
Spinner.propTypes = {
  className: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  small: PropTypes.bool,
  light: PropTypes.bool,
  alignment: PropTypes.string,
  backgroundColor: PropTypes.string
};

const spinAnimation = keyframes`
  from { transform: rotate(0turn); }
  to   { transform: rotate(1turn); }
`;
export default styled(Spinner)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  transition-duration: ${theme.animation.duration}ms;
  transition-timing-function: ${theme.animation.easing};
  transition-property: opacity, visibility;
  user-select: none;
  pointer-events: none;
  z-index: 1;

  .svg-wrapper {
    content: "";
    display: block;
    width: ${rem(48)};
    height: ${rem(48)};
    position: absolute;
    top: calc(50% - ${rem(24)});
    left: calc(50% - ${rem(24)});
    z-index: 1;

    svg {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      animation: ${spinAnimation} 1s linear 0s infinite forwards;
      fill: currentColor;
    }
  }
`;
