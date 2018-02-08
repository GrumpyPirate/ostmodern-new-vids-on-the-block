// React
import React from 'react'
import PropTypes from 'prop-types';

// Vendor
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { saturation, brightness } from 'chromatism';

// Styles
import theme from '../../styles/theme';

const linkColours = {
  idle: brightness(-20, saturation( -90, theme.colors.shadeLight ).hex).hex,
  hover: theme.colors.shadeLight
};

// Define components
const SetLink = ({ className, set }) => {
  return (
    <NavLink to={`/sets/${set.slug}`} className={className}>
      {set.title}
    </NavLink>
  );
} // /class SetLink extends React.Component

// PropTypes
SetLink.propTypes = {
  className: PropTypes.string.isRequired,
  set: PropTypes.shape({
    active: PropTypes.bool,
    body: PropTypes.string,
    cached_film_count: PropTypes.number,
    created: PropTypes.string,
    created_by: PropTypes.string,
    ends_on: PropTypes.string,
    featured: PropTypes.bool,
    film_count: PropTypes.number,
    formatted_body: PropTypes.string,
    has_price: PropTypes.bool,
    hierarchy_url: PropTypes.string,
    image_urls: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.array,
    language_ends_on: PropTypes.string,
    language_modified: PropTypes.string,
    language_modified_by: PropTypes.string,
    language_publish_on: PropTypes.string,
    language_version_number: PropTypes.number,
    language_version_url: PropTypes.string,
    lowest_amount: PropTypes.number,
    modified: PropTypes.string,
    modified_by: PropTypes.string,
    plans: PropTypes.array,
    publish_on: PropTypes.string,
    quote: PropTypes.string,
    quoter: PropTypes.string,
    schedule_url: PropTypes.string,
    schedule_urls: PropTypes.arrayOf(PropTypes.string),
    self: PropTypes.string,
    set_type_slug: PropTypes.string,
    set_type_url: PropTypes.string,
    slug: PropTypes.string,
    summary: PropTypes.string,
    temp_id: PropTypes.number,
    temp_image: PropTypes.string,
    title: PropTypes.string,
    uid: PropTypes.string,
    version_number: PropTypes.number,
    version_url: PropTypes.string
  }).isRequired
};

export default styled(SetLink)`
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
  white-space: nowrap;
  color: ${linkColours.idle};
  font-family: ${theme.type.headings.fontStack};
  font-weight: ${theme.type.headings.fontWeight};
  text-transform: uppercase;
  text-decoration: none;
  transition: color ${theme.animation.duration}ms ${theme.animation.easing};

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${linkColours.hover};
    transition-property: transform, visibility;
    transition-duration: ${theme.animation.duration * 2}ms;
    transition-timing-function: ${theme.animation.easing};
    visibility: hidden;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover,
  &:focus,
  &.active {
    color: ${linkColours.hover};

    &::after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;
