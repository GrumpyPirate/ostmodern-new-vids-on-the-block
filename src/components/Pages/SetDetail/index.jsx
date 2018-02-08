// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Vendor
// import styled from 'styled-components';

// Components
import withContentService from '../../HOCs/withContentService';

// Define components
class SetPage extends Component {
  render () {
    const set = this.props.set;

    return (
      <div>This is set '{set.title}'</div>
    );
  } // /render
} // /class SetPage

// PropTypes
SetPage.propTypes = {
  set: PropTypes.shape({
    uid: PropTypes.string.isRequired
  }).isRequired
};

export default withContentService(SetPage);
