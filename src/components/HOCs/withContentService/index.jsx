// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Utils
import ContentService from "../../../services/ContentService";

// Define HOC
export default function withContentService(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.contentService = new ContentService();
    } // /constructor

    render() {
      return (
        <WrappedComponent
          contentService={this.contentService}
          {...this.props}
        />
      );
    }
  }; // /return class
} // /function withContentService

// PropTypes
withContentService.propTypes = {
  WrappedComponent: PropTypes.object.isRequired
};
