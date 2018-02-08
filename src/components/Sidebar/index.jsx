// React
import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Vendor
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// Components
import Heading from '../Typography/Heading';
import SetLink from '../SetLink';

// Styles
import { rem } from '../../utilities';
import theme from '../../styles/theme';

// Define components
const NavHeading = styled(Heading)`
  padding-bottom: ${rem(theme.verticalRhythm / 2)};
  margin-bottom: ${rem(theme.verticalRhythm / 2)};
  border-bottom: solid 1px currentColor;
`;

const Sidebar = ({ className, sets }) => {
  const hasSets = !!sets.length;

  return (
    <nav className={className}>
      {hasSets
        && (
          <Fragment>
            <NavHeading level={2} displayLevel={5}>Sets</NavHeading>

            <ul>
              {sets.map(set => (
                <li key={set.uid}>
                  <SetLink set={set} />
                </li>
              ))}
            </ul>
          </Fragment>
        )
      }
    </nav>
  );
} // /class Sidebar extends React.Component

// PropTypes
Sidebar.propTypes = {
  className: PropTypes.string.isRequired,
  sets: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired
};

// Redux bindings
const mapStateToProps = state => {
  return {
    sets: state.sets
  };
};

export default withRouter(
  connect(
    mapStateToProps
  )(styled(Sidebar)`
    position: fixed;
    top: 0;
    left: 0;
    width: ${rem(theme.elements.sidebar.width)};
    height: 100%;
    text-align: right;
    background-color: ${theme.colors.accentDark};
    color: ${theme.colors.shadeLight};
    padding: 1rem;
  `)
);
