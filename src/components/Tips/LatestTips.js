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
  Body,
  Header,
  Left,
  Title,
  Footer,
  FooterTab,
  Icon,
  Button
} from "native-base";

import { withNavigation, DrawerActions } from "react-navigation";

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
      // <Grid>
      //   {this.state.tips ? (
      //     //   <Col style={{ marginTop: 10 }}>
      //     this.state.tips.map(tip => {
      //       const { id, post_featured_images, post_title, post_slug } = tip;
      //       return (
      //         <Button
      //           onPress={() => {
      //             this.props.navigation.push("Detail", {
      //               post_slug,
      //               id
      //             });
      //           }}
      //           key={id}
      //         >
      //           <Row
      //             style={{
      //               width: "100%",
      //               marginVertical: 5,
      //               flexDirection: "row",
      //               alignContent: "center",
      //               padding: 10,
      //               paddingTop: 0,
      //               marginTop: 0
      //             }}
      //           >
      //             <Row>
      //               <Image
      //                 source={{
      //                   uri: `https://www.winsomeglow.com/images/posts/featured/${post_featured_images}`
      //                 }}
      //                 style={{ width: 100, height: 100 }}
      //               />
      //             </Row>
      //             <Row style={{ width: "70%", marginHorizontal: 10 }}>
      //               <Text
      //                 style={{
      //                   fontSize: 20,
      //                   fontWeight: "bold"
      //                 }}
      //               >
      //                 {post_title}
      //               </Text>
      //               <Text style={{ textTransform: "capitalize" }}>
      //                 {post_title}&nbsp; for you. Click To read in detail
      //               </Text>
      //             </Row>
      //           </Row>
      //         </Button>
      //       );
      //     })
      //   ) : (
      //     //   </Col>
      //     <Grid
      //       style={{
      //         alignItems: "center",
      //         justifyContent: "center",
      //         height: 300
      //       }}
      //     >
      //       <ActivityIndicator
      //         color="green"
      //         size={80}
      //         animating={this.state.tips ? false : true}
      //       />
      //     </Grid>
      //   )}
      // </Grid>
      // <Container>
      //   <Header />
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.openDrawer());
              }}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Beauty Tips</Title>
          </Body>
        </Header>
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
            <Col
              style={{
                backgroundColor: "#635DB7",
                height: 500,
                paddingVertical: 10,
                paddingHorizontal: 5
              }}
            >
              {this.state.tips &&
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
                            {post_title}&nbsp; for you. Click To read in detail
                          </Text>
                        </Col>
                      </Row>
                    </Button>
                  );
                })}
            </Col>
            <Row style={{ backgroundColor: "#00CE9F", height: 200 }} />
          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      // {/* </Container> */}
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
