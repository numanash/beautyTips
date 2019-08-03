/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Grid,
  Content,
  Text,
  Row,
  Col,
  Body,
  Header,
  Left,
  Title,
  Footer,
  FooterTab,
  Icon,
  Spinner,
  Button
} from "native-base";

import { withNavigation, DrawerActions } from "react-navigation";
import Layout from "../includes/Layout";

class LatestTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: undefined
    };
  }

  componentDidMount() {
    fetch("https://www.winsomeglow.com/api/admin/latest-posts")
      .then(res => res.json())
      .then(result => {
        console.log({ result });
        this.setState({
          tips: result
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <Layout
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Content>
          <Grid>
            <Text
              style={{
                padding: 10,
                fontWeight: "bold"
              }}
            >
              Latest Beauty Tips
            </Text>
            <Row>
              <Col
                style={{
                  backgroundColor: "#a239ca",
                  height: 500,
                  paddingVertical: 10,
                  paddingHorizontal: 5
                }}
              >
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
                        style={{ marginTop: 10, height: "auto" }}
                        onPress={() => {
                          this.props.navigation.push("Detail", {
                            post_slug,
                            id
                          });
                        }}
                      >
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
