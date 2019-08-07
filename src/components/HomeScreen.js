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
          <Row style={{ height: 150, position: "relative" }}>
            <Col
              style={{ width: Dimensions.get("window").width / 2, padding: 10 }}
            >
              <ImageBackground
                borderRadius={0}
                source={{
                  uri:
                    "https://www.eclatmedspa.com/wp-content/uploads/2018/06/left-img-1.jpg"
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
                  onPress={() => this.props.navigation.push("SkinCareTips")}
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
                    Skin Care
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
                    "https://fustany.com/images/en/content/header_image_fustany-beauty-four_nail_saving_tips_to_keep_them_healthy_in_the_summer-main_image-02.jpg"
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
                  onPress={() => this.props.navigation.push("NailsTips")}
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
                    Nails Tips
                  </Text>
                </Button>
              </ImageBackground>
            </Col>
          </Row>
          <Row style={{ height: 150, position: "relative" }}>
            <Col
              style={{ width: Dimensions.get("window").width / 2, padding: 10 }}
            >
              <ImageBackground
                borderRadius={0}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88UUEiA1qUobMSS2aPMPbqkm_lsaG6sKDtXhY-AzPB8dGgRFf"
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
                  onPress={() => this.props.navigation.push("MakeupListing")}
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
                    Make Up Tips
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
                    "https://cdn.cdnparenting.com/articles/2019/01/21172013/1074615881-H.jpg"
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
                  onPress={() => this.props.navigation.push("HairTips")}
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
                    Hair Tips
                  </Text>
                </Button>
              </ImageBackground>
            </Col>
          </Row>
          <Row style={{ height: 150, position: "relative" }}>
            <Col
              style={{ width: Dimensions.get("window").width / 2, padding: 10 }}
            >
              <ImageBackground
                borderRadius={0}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88UUEiA1qUobMSS2aPMPbqkm_lsaG6sKDtXhY-AzPB8dGgRFf"
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
                  onPress={() => this.props.navigation.push("DIYBeautyTips")}
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
                    DIY Beauty
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
