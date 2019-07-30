import React, { Component } from "react";
import TipsListing from "./components/Tips/TipsListing";
import { View } from "react-native";

class Main extends Component {
  state = {};
  render() {
    return (
      <View>
        <TipsListing />
      </View>
    );
  }
}

export default Main;
