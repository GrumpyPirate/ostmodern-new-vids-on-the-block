// React
import React from 'react'
import PropTypes from 'prop-types';

// Vendor
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styles
import theme from '../../styles/theme';

// Define components
const SetLink = ({ className, set }) => {
  return (
    <NavLink className={className} to={`/sets/${set.slug}`}>
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
  white-space: nowrap;
  color: inherit;
  font-family: ${theme.type.headings.fontStack};
  font-weight: ${theme.type.headings.fontWeight};
  text-transform: uppercase;
  text-decoration: none;
`;
