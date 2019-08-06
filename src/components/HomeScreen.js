import React, { Component } from "react";
import { withNavigation, DrawerActions } from "react-navigation";
import { Dimensions, ImageBackground } from "react-native";
import { Content, Text, Thumbnail, Row, Col, Button } from "native-base";
import Layout from "./includes/Layout";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <Layout
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Content>
          <Text style={{ padding: 10, textAlign: "center" }}>
            Do you want to look beautiful. Checkout our beauty tips.
          </Text>
          <Row style={{ height: 150, position: "relative" }}>
            <Col
              style={{ width: Dimensions.get("window").width / 2, padding: 10 }}
            >
              <ImageBackground
                borderRadius={0}
                source={{
                  uri:
                    "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-queen-s-day-receives-flowers-cartoon-female-image_1260055.jpg"
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                  flex: 1,
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  transparent
                  onPress={() => this.props.navigation.push("LatestTips")}
                  style={{ width: "100%" }}
                >
                  <Text
                    style={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                      textAlign: "center",
                      color: "white"
                    }}
                  >
                    Latest Beauty Tips
                  </Text>
                </Button>
              </ImageBackground>
            </Col>
            <Col
              style={{ width: Dimensions.get("window").width / 2, padding: 10 }}
            >
              <ImageBackground
                borderRadius={0}
                source={{
                  uri:
                    "https://cdn.evoke.ie/wp-content/uploads/2019/04/27165721/beauty-icon-feat-696x503.jpg"
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                  flex: 1,
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  transparent
                  onPress={() => this.props.navigation.push("Listing")}
                  style={{ width: "100%" }}
                >
                  <Text
                    style={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                      textAlign: "center",
                      color: "white",
                      width: "100%"
                    }}
                  >
                    Random Beauty Tips
                  </Text>
                </Button>
              </ImageBackground>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default withNavigation(HomeScreen);
