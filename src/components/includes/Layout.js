import React, { Component } from "react";
import { StyleSheet, Image, StatusBar } from "react-native";
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
  Button,
  Right
} from "native-base";

import { withNavigation, DrawerActions } from "react-navigation";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title ? this.props.title : "Beauty Tips"
    };
  }
  componentWillReceiveProps(props) {
    if (props.title !== this.props.title) {
      this.setState({
        title: props.title
      });
    }
  }
  render() {
    console.log({ p: this.props });
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#0e0b16" }}
          androidStatusBarColor="#a239ca"
        >
          {this.props.onPress && (
            <Left>
              <Button transparent onPress={this.props.onPress}>
                <Icon name="menu" />
              </Button>
            </Left>
          )}
          <Body>
            <Title numberOfLines={1}>{this.state.title}</Title>
          </Body>
          {this.props.goBack && (
            <Right>
              <Button transparent onPress={this.props.goBack}>
                <Icon name="arrow-back" />
              </Button>
            </Right>
          )}
        </Header>
        {this.props.children}
        <Footer>
          <Grid>
            {this.props.customFooter && (
              <Row
                style={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: "#0e0b16"
                }}
              >
                {this.props.customFooter}
              </Row>
            )}
            <Row>
              <FooterTab style={{ backgroundColor: "#0e0b16" }}>
                <Text
                  style={{
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    textAlignVertical: "center"
                  }}
                >
                  Developed with Love &nbsp;
                  <Icon name="heart" style={{ color: "white" }} />
                </Text>
              </FooterTab>
            </Row>
          </Grid>
        </Footer>
      </Container>
    );
  }
}

export default Layout;
