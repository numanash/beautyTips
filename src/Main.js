import React, { Component } from "react";
import TipsListing from "./components/Tips/TipsListing";
import { View } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Content,
  Body,
  FooterTab,
  Footer,
  Title,
  Text
} from "native-base";
import { withNavigation, DrawerActions } from "react-navigation";
import LatestTips from "./components/Tips/LatestTips";
class Main extends Component {
  state = {};
  render() {
    return (
      <Container />
      // <Container>
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
      //   <Content>
      //     <LatestTips />
      //   </Content>
      //   {/* <Footer>
      //     <FooterTab>
      //       <Button full>
      //         <Text>Footer</Text>
      //       </Button>
      //     </FooterTab>
      //   </Footer> */}
      // </Container>
    );
  }
}

export default withNavigation(Main);
