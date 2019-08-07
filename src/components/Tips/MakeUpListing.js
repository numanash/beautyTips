import React, { Component } from "react";
import AllListing from "./AllListing";

class MakeupListing extends Component {
  state = {};
  render() {
    return <AllListing subCategory="make-up" title="Make-Up Tips" />;
  }
}

export default MakeupListing;
