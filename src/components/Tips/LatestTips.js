/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import Pagination from "../Utils/Pagination";
import {
  Container,
  Card,
  Grid,
  CardItem,
  Content,
  Text,
  Row,
  Col,
  Button
} from "native-base";

import { withNavigation } from "react-navigation";

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
      <Grid>
        {this.state.tips ? (
          //   <Col style={{ marginTop: 10 }}>
          this.state.tips.map(tip => {
            const { id, post_featured_images, post_title, post_slug } = tip;
            return (
              <Button
                onPress={() => {
                  this.props.navigation.push("Detail", {
                    post_slug,
                    id
                  });
                }}
                key={id}
              >
                <Row
                  style={{
                    width: "100%",
                    marginVertical: 5,
                    flexDirection: "row",
                    alignContent: "center",
                    padding: 10,
                    paddingTop: 0,
                    marginTop: 0
                  }}
                >
                  <Row>
                    <Image
                      source={{
                        uri: `https://www.winsomeglow.com/images/posts/featured/${post_featured_images}`
                      }}
                      style={{ width: 100, height: 100 }}
                    />
                  </Row>
                  <Row style={{ width: "70%", marginHorizontal: 10 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold"
                      }}
                    >
                      {post_title}
                    </Text>
                    <Text style={{ textTransform: "capitalize" }}>
                      {post_title}&nbsp; for you. Click To read in detail
                    </Text>
                  </Row>
                </Row>
              </Button>
            );
          })
        ) : (
          //   </Col>
          <Grid
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 300
            }}
          >
            <ActivityIndicator
              color="green"
              size={80}
              animating={this.state.tips ? false : true}
            />
          </Grid>
        )}
      </Grid>
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
