/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import AllListing from "../AllListing";
class SkinCareListing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AllListing subCategory="skin-care" title="Skin Care Tips" />;
  }
}

export default SkinCareListing;
