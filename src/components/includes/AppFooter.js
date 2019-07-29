import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
class AppFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          backgroundColor: "black"
        }}
      >
        <View>
          <Icon name="ios-home" size={30} color="black" />
          <Text style={{ color: "white" }}>Home</Text>
        </View>
      </View>
    );
  }
}

export default AppFooter;
