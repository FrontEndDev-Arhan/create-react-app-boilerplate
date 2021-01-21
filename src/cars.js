import React, { Component } from "react";
import PropTypes from "prop-types";

class Cars extends Component {
  static get propTypes() {
    return {
      element: PropTypes.element,
    };
  }
  static get defaultProps() {
    return {
      element: "default element",
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.element} can only be a element</h1>
      </React.Fragment>
    );
  }
}

export { Cars };
