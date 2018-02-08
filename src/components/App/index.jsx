// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { initSets } from '../../actions';

// Vendor
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { rem } from '../../utilities';

// Styles
import theme from '../../styles/theme';

// Components
import Sidebar from '../Sidebar';
import SetDetail from '../Pages/SetDetail';
import withContentService from '../HOCs/withContentService';

// Define components
const Main = styled.main`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - ${rem(theme.elements.sidebar.width)});
  height: 100%;
  padding: 1rem;
  color: ${theme.colors.shadeLight};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

class App extends Component {
  getSets () {
    this.props.contentService.getAllSets()
      .then(res => {
        const { objects } = res;
        // Sort by title (desc)
        const sortedSets = objects.sort((setA, setB) => {
          const titleA = setA.title.toUpperCase();
          const titleB = setB.title.toUpperCase();

          if (titleA < titleB) {
            return -1;
          }

          if (titleA > titleB) {
            return 1;
          }

          return 0;
        });

        this.props.initSets(sortedSets);
      })
      .catch(err => {
        console.log('Error fetching sets:', err);
      });
  } // /getData

  // Lifecycle
  componentDidMount() {
    // Get sets, store them in redux store
    this.getSets();
  }

  render () {
    return (
      <Router basename="/">
        <div className={this.props.className}>
          <Sidebar />

          <Main>
            <Switch>
              {/* Index route */}
              <Route exact path="/" render={() => <div>Home</div>} />

              {/* /sets/{slug} */}
              {!!this.props.sets.length
                && (
                  <Route exact path="/sets/:slug" component={SetDetail} />
                )
              }

              {/* 404? Redirect to index */}
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Main>
        </div>
      </Router>
    );
  } // /render
} // /class App

// PropTypes
App.propTypes = {
  initSets: PropTypes.func.isRequired,
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
    }).isRequired
  ).isRequired
};

// Redux bindings
const mapStateToProps = state => {
  return {
    sets: state.sets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initSets: sets => dispatch(initSets(sets))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withContentService(
    styled(App)`
      color: ${theme.colors.accentDark};
    `
  )
);
