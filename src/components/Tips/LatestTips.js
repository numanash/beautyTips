/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";

import { StyleSheet, Image } from "react-native";
import {
  Grid,
  Content,
  Text,
  Row,
  Col,
  Icon,
  Spinner,
  Button
} from "native-base";

import { withNavigation, DrawerActions } from "react-navigation";
import Layout from "../includes/Layout";
import Style from "../../styles/LatestTips";
// const drawerCover = ;
class LatestTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: undefined
    };
  }

  componentDidMount() {
    fetch("https://www.winsomeglow.com/api/admin/latest-posts")
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log({ latest: result });
        this.setState({
          tips: result
        });
      })
      .catch(e => {
        console.log({ err: e });
      });
  }

  render() {
    return (
      <Layout
        goBack={() => {
          this.props.navigation.goBack();
        }}
        title="Latest Beauty Tips"
      >
        <Image
          source={{
            uri:
              "http://marhaen.co/wp-content/uploads/2019/01/beautiful-nature-wallpaper-for-mobile-download-coloured-beauty-of-phone-background.jpg"
          }}
          style={Style.drawerCover}
        />
        <Content style={Style.mainDrawer}>
          <Grid>
            <Text
              style={{
                padding: 10,
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              Latest Beauty Tips
            </Text>
            <Row>
              <Col>
                {!this.state.tips ? (
                  <Spinner />
                ) : (
                  this.state.tips.map(tip => {
                    const {
                      id,
                      post_featured_images,
                      post_title,
                      post_slug
                    } = tip;
                    return (
                      <Button
                        transparent
                        key={id}
                        style={Style.listingTip}
                        onPress={() => {
                          this.props.navigation.push("Detail", {
                            post_slug,
                            id
                          });
                        }}
                      >
                        <Icon
                          name="arrow-dropright-circle"
                          style={Style.detailIconStyling}
                        />
                        <Row>
                          <Col style={{ width: 100, height: 100 }}>
                            <Image
                              source={{
                                uri: `https://www.winsomeglow.com/images/posts/featured/${post_featured_images}`
                              }}
                              style={{ width: "100%", height: "100%" }}
                            />
                          </Col>
                          <Col>
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "white"
                              }}
                            >
                              {post_title}
                            </Text>
                            <Text
                              style={{
                                textTransform: "capitalize",
                                fontSize: 12,
                                color: "white"
                              }}
                            >
                              {post_title}&nbsp; for you. Click To read in
                              detail
                            </Text>
                          </Col>
                        </Row>
                      </Button>
                    );
                  })
                )}
              </Col>
            </Row>
          </Grid>
        </Content>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default withNavigation(LatestTips);
