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
  Button,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import Pagination from "../Utils/Pagination";
import { withNavigation, DrawerActions } from "react-navigation";
import Layout from "../includes/Layout";
class AllListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: undefined,
      totalTips: 0,
      lastPage: 0,
      currentPage: 1,
      perPage: 0
    };
  }
  _keyExtractor = (item, index) => item.id.toString();
  componentDidMount() {
    fetch(
      `https://api.popxo.com/api/v14/app_posts/category_feed/?&category=beauty&sub_category=${
        this.props.subCategory
      }&section=latest_stories&page=1&locale=en`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          tips: result.data.latest_stories,
          currentPage: parseInt(result.params.page)
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      let currentPage;
      this.state.currentPage === 0
        ? (currentPage = 1)
        : (currentPage = this.state.currentPage);
      fetch(
        `https://api.popxo.com/api/v14/app_posts/category_feed/?&category=beauty&sub_category=${
          this.props.subCategory
        }&section=latest_stories&page=${currentPage}&locale=en`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => {
          return res.json();
        })
        .then(result => {
          this.setState({
            tips: result.data.latest_stories,
            // lastPage: result.lastPage,
            // totalTips: result.totalPages,
            // perPage: result.perPage,
            currentPage: parseInt(result.params.page)
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  render() {
    return (
      <Layout
        goBack={() => {
          this.props.navigation.goBack();
        }}
        title={this.props.title}
        customFooter={
          <Pagination
            onPressNext={() => {
              this.setState(prevState => {
                return {
                  currentPage: prevState.currentPage + 1,
                  tips: undefined
                };
              });
            }}
            onPressPrevious={() => {
              this.setState(prevState => {
                return {
                  currentPage: prevState.currentPage - 1,
                  tips: undefined
                };
              });
            }}
            currentPage={this.state.currentPage}
            lastPage={this.state.lastPage}
            totalTips={this.state.totalTips}
            perPage={this.state.perPage}
          />
        }
      >
        {/* <Image source={{ uri: "http://marhaen.co/wp-content/uploads/2019/01/beautiful-nature-wallpaper-for-mobile-download-coloured-beauty-of-phone-background.jpg" }} style={Style.drawerCover} /> */}
        <Content>
          {!this.state.tips ? (
            <Spinner />
          ) : (
            <List
              key={(item, id) => item.id.toString()}
              dataArray={this.state.tips}
              renderRow={tip => (
                <ListItem
                  thumbnail
                  key={tip.id.toString()}
                  onPress={() => {
                    this.props.navigation.push("Detail", {
                      customFetch: true,
                      customFetchUrl: `https://api.popxo.com/api/v13/app_posts/fetch_article_content?url=${
                        tip.slug
                      }&mobile=true&app_version=363&sp=4bff4f4c-c90a-4afe-b6ca-64717c816ca6&locale=en`
                    });
                  }}
                >
                  <Left style={{ width: 100, height: 100 }}>
                    <Thumbnail
                      square
                      style={{ width: "100%", height: "100%" }}
                      source={{
                        uri: `${tip.image.original.url.replace(
                          "w-600",
                          "w-200"
                        )}`
                      }}
                    />
                  </Left>
                  <Body>
                    <Text>{tip.title}</Text>
                    <Text note numberOfLines={1}>
                      {tip.seo_meta_description}
                    </Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={() => {
                        this.props.navigation.push("Detail", {
                          customFetch: true,
                          customFetchUrl: `https://api.popxo.com/api/v13/app_posts/fetch_article_content?url=${
                            tip.slug
                          }&mobile=true&app_version=363&sp=4bff4f4c-c90a-4afe-b6ca-64717c816ca6&locale=en`
                        });
                      }}
                    >
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              )}
            />
          )}
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
export default withNavigation(AllListing);
