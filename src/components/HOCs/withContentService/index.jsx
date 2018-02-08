// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Utils
import ContentService from '../../../services/ContentService';

// Define HOC
const withContentService = (WrappedComponent) => {
  return class extends Component {
    constructor () {
      super();
      this.contentService = new ContentService();
    } // /constructor

    render () {
      return <WrappedComponent contentService={this.contentService} {...this.props} />
    }
  }
}; // /const withContentService;

// PropTypes
withContentService.propTypes = {
  Component: PropTypes.object.isRequired
};

export default withContentService;
