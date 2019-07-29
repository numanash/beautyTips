import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log({ propsss: this.props });
  }
  render() {
    return (
      <View style={style.container}>
        <Text style={style.appHeaderStyle}>Beauty Tips</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  appHeaderStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  container: {
    backgroundColor: "#2c3a4c",
    padding: 10
  }
});
export default AppHeader;
