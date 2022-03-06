import React, { Component } from "react";
import { badges, badgeColor } from "./staticData";

class badgeDesigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: [],
      icons: [],
    };
  }

  componentDidMount = () => {};

  render() {
    return (
      <React.Fragment>
        <h1>hello world</h1>
      </React.Fragment>
    );
  }
}

export default badgeDesigner;
