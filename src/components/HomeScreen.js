import React, { Component } from "react";
import { withNavigation, DrawerActions } from "react-navigation";
import { Dimensions, ImageBackground } from "react-native";
import { Content, Text, Thumbnail, Row, Col } from "native-base";
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
          <Text>Want Cool Checkout our beauty tips</Text>
          <Row style={{ height: 150, position: "relative" }}>
            <Col
              style={{ width: Dimensions.get("window").width / 2, padding: 10 }}
            >
              <ImageBackground
                borderRadius={0}
                source={{
                  uri:
                    "https://www.canva.com/learn/wp-content/uploads/2016/11/yt-thumbnail-09.png"
                }}
                style={{ width: "100%", height: "100%", zIndex: -1 }}
              >
                <Text>Category 1</Text>
              </ImageBackground>
            </Col>
            <Col
              style={{ width: Dimensions.get("window").width / 2, padding: 10 }}
            >
              <ImageBackground
                borderRadius={0}
                source={{
                  uri:
                    "https://www.canva.com/learn/wp-content/uploads/2016/11/yt-thumbnail-09.png"
                }}
                style={{ width: "100%", height: "100%", zIndex: -1 }}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default HomeScreen;
