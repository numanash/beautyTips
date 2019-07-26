/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import Pagination from "../Utils/Pagination";

import { withNavigation } from "react-navigation";


class TipsListing extends Component {
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
    fetch("https://www.winsomeglow.com/api/admin/posts")
      .then(res => res.json())
      .then(result => {
        console.log({ result });
        this.setState({
          tips: result.posts,
          lastPage: result.lastPage,
          totalTips: result.totalPages,
          perPage: result.perPage,
          currentPage: result.currentPage
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
      fetch(`https://www.winsomeglow.com/api/admin/posts?page=${currentPage}`)
        .then(res => res.json())
        .then(result => {
          console.log({ result });
          console.log({ props: this.props });
          this.setState({
            tips: result.posts,
            lastPage: result.lastPage,
            totalTips: result.totalPages,
            perPage: result.perPage,
            currentPage: result.currentPage
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.tips ? (
          <View style={{ height: 300 }}>
            <FlatList
              style={{ width: "100%" }}
              data={this.state.tips}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => {
                const { id, post_featured_images, post_title, post_slug } = item;
                return (
                  <TouchableOpacity onPress={() => {
                    this.props.navigation.push('Detail', {
                      post_slug,
                      id
                    })
                  }}>
                    < View
                      style={{
                        width: "100%",
                        marginVertical: 5,
                        flexDirection: "row",
                        alignContent: "center",
                        padding: 10
                      }}
                    >
                      <View>
                        <Image
                          source={{
                            uri: `https://www.winsomeglow.com/images/posts/featured/${post_featured_images}`
                          }}
                          style={{ width: 100, height: 100 }}
                        />
                      </View>
                      <View style={{ width: "70%", marginHorizontal: 10 }}>
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
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : (
            <View
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
            </View>
          )}

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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 550,
    width: "100%"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default withNavigation(TipsListing);
