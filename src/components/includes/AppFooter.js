import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    return (
      <View style={{ padding: 10, backgroundColor: "black" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <TouchableHighlight
            style={style.footer_links}
            onPress={() => {
              this.props.navigation.push("Home");
            }}
          >
            <React.Fragment>
              <Icon name="ios-home" size={30} color="white" />
              <Text style={{ color: "white" }}>Home</Text>
            </React.Fragment>
          </TouchableHighlight>
          <TouchableHighlight style={style.footer_links}>
            <React.Fragment>
              <Icon name="ios-home" size={30} color="white" />
              <Text style={{ color: "white" }}>Home</Text>
            </React.Fragment>
          </TouchableHighlight>
          <TouchableHighlight style={style.footer_links}>
            <React.Fragment>
              <Icon name="ios-home" size={30} color="white" />
              <Text style={{ color: "white" }}>Home</Text>
            </React.Fragment>
          </TouchableHighlight>
          <TouchableHighlight style={style.footer_links}>
            <React.Fragment>
              <Icon name="ios-home" size={30} color="white" />
              <Text style={{ color: "white" }}>Home</Text>
            </React.Fragment>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  footer_links: {
    alignItems: "center"
  }
});

export default withNavigation(AppFooter);
