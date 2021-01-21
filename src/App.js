import React, { Component } from "react";
import { Cars } from "./cars";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: <em>{{ a: 1, b: 3 }}</em>,
    };
  }

  render() {
    const element = this.state.element;
    return (
      <React.Fragment>
        <Cars element={element} />
      </React.Fragment>
    );
  }
}
