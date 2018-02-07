// React
import React, { Component } from 'react';

// Vendor
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Config
// import theme from '../../styles/theme';
import { sets } from '../../config/contentSettings';

// Utils
import ContentService from '../../services/ContentService';

// Styles
class ContentList extends Component {
  constructor (props) {
    super(props);

    this.contentService = new ContentService();

    this.state = {
      sets: []
    };
  } // /constructor

  getData () {
    this.contentService.getSet(sets.home)
      .then(res => {
        console.log('response:', res);
      })
      .catch(err => {
        console.log('Error fetching sets:', err);
      });
  } // /getData

  componentDidMount() {
    this.getData();
  }

  render () {
    return (
      <div className={this.props.className}>
        {this.state.sets.length > 0
          ? (
            <ul>
              <li>We have some sets</li>
            </ul>
          )
          : <p>No sets found.</p>
        }
      </div>
    );
  } // /render
} // /class ContentList;

// PropTypes
ContentList.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(ContentList)``;
