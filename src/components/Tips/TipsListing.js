/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  StyleSheet,
  Image
} from "react-native";
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
  Thumbnail, Left, Body, Right
} from "native-base";
import Pagination from "../Utils/Pagination";
import { withNavigation, DrawerActions } from "react-navigation";
import Layout from "../includes/Layout";
import Style from "../../styles/LatestTips";
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
      // <View>
      //   <Header>
      //     <Left>
      //       <Button
      //         transparent
      //         onPress={() => {
      //           this.props.navigation.dispatch(DrawerActions.openDrawer());
      //         }}
      //       >
      //         <Icon name="menu" />
      //       </Button>
      //     </Left>
      //     <Body>
      //       <Title>Beauty Tips</Title>
      //     </Body>
      //   </Header>
      //   <View style={styles.container}>
      //     {this.state.tips ? (
      //       <View style={{ height: 300, marginTop: 10 }}>
      //         <FlatList
      //           style={{ width: "100%" }}
      //           data={this.state.tips}
      //           keyExtractor={this._keyExtractor}
      //           renderItem={({ item }) => {
      //             const {
      //               id,
      //               post_featured_images,
      //               post_title,
      //               post_slug
      //             } = item;
      //             return (
      //               <TouchableOpacity
      //                 onPress={() => {
      //                   this.props.navigation.push("Detail", {
      //                     post_slug,
      //                     id
      //                   });
      //                 }}
      //               >
      //                 <View
      //                   style={{
      //                     width: "100%",
      //                     marginVertical: 5,
      //                     flexDirection: "row",
      //                     alignContent: "center",
      //                     padding: 10,
      //                     paddingTop: 0,
      //                     marginTop: 0
      //                   }}
      //                 >
      //                   <View>
      //                     <Image
      //                       source={{
      //                         uri: `https://www.winsomeglow.com/images/posts/featured/${post_featured_images}`
      //                       }}
      //                       style={{ width: 100, height: 100 }}
      //                     />
      //                   </View>
      //                   <View style={{ width: "70%", marginHorizontal: 10 }}>
      //                     <Text
      //                       style={{
      //                         fontSize: 20,
      //                         fontWeight: "bold"
      //                       }}
      //                     >
      //                       {post_title}
      //                     </Text>
      //                     <Text style={{ textTransform: "capitalize" }}>
      //                       {post_title}&nbsp; for you. Click To read in detail
      //                     </Text>
      //                   </View>
      //                 </View>
      //               </TouchableOpacity>
      //             );
      //           }}
      //         />
      //       </View>
      //     ) : (
      //       <View
      //         style={{
      //           alignItems: "center",
      //           justifyContent: "center",
      //           height: 300
      //         }}
      //       >
      //         <ActivityIndicator
      //           color="green"
      //           size={80}
      //           animating={this.state.tips ? false : true}
      //         />
      //       </View>
      //     )}

      //     <Pagination
      //       onPressNext={() => {
      //         this.setState(prevState => {
      //           return {
      //             currentPage: prevState.currentPage + 1,
      //             tips: undefined
      //           };
      //         });
      //       }}
      //       onPressPrevious={() => {
      //         this.setState(prevState => {
      //           return {
      //             currentPage: prevState.currentPage - 1,
      //             tips: undefined
      //           };
      //         });
      //       }}
      //       currentPage={this.state.currentPage}
      //       lastPage={this.state.lastPage}
      //       totalTips={this.state.totalTips}
      //       perPage={this.state.perPage}
      //     />
      //     <Footer>
      //       <FooterTab>
      //         <Button full>
      //           <Text>Footer</Text>
      //         </Button>
      //       </FooterTab>
      //     </Footer>
      //   </View>
      // </View>
      <Layout
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >



        {/* <Image source={{ uri: "http://marhaen.co/wp-content/uploads/2019/01/beautiful-nature-wallpaper-for-mobile-download-coloured-beauty-of-phone-background.jpg" }} style={Style.drawerCover} /> */}
        <Content  >
          {!this.state.tips ? <Spinner /> : (
            <List dataArray={this.state.tips} renderRow={tip =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: tip.post_featured_images }} />
                </Left>
                <Body>
                  <Text>{tip.post_title}</Text>
                  <Text note numberOfLines={1}>{tip.post_title}</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => {
                    this.props.navigation.push("Detail", {
                      post_slug: tip.post_slug,
                      id: tip.id
                    });
                  }}>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>

            } />
          )}

          {/* <Grid >
            <Text
              style={{
                padding: 10,
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              Beauty Tips
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
                          <Icon name="arrow-dropright-circle" style={Style.detailIconStyling} />
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
       */}
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
export default withNavigation(TipsListing);
