// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { initSets } from '../../actions';

// Vendor
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

// Utils
import ContentService from '../../services/ContentService';

// Config
import theme from '../../styles/theme';

// Components
import Sidebar from '../Sidebar';
// import ContentList from '../ContentList';

// Styles
class App extends Component {
  constructor (props) {
    super(props);
    this.contentService = new ContentService();
  }

  getSets () {
    this.contentService.getAllSets()
      .then(res => {
        const { objects } = res;
        this.props.initSets(objects);
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
      <div className={this.props.className}>
        <Router>
          <Sidebar />
        </Router>
      </div>
    );
  } // /render
} // /class App

// PropTypes
App.propTypes = {
  initSets: PropTypes.func.isRequired
};

// Redux bindings
const mapDispatchToProps = dispatch => {
  return {
    initSets: sets => dispatch(initSets(sets))
  };
};

export default connect(null, mapDispatchToProps)(styled(App)`
  color: ${theme.colors.accentDark};
`);
