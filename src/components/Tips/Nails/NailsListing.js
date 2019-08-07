/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import AllListing from "../AllListing";
class NailListing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AllListing subCategory="nails" title="Nail Tips" />;
  }
}
export default NailListing;
