import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { withNavigation, DrawerActions } from "react-navigation";
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import Layout from "../includes/Layout";
import LatestTips from "./LatestTips";

class TipsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: undefined
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const customFetch = navigation.getParam("customFetch");
    console.log({ customFetch });
    if (customFetch) {
      fetch(navigation.getParam("customFetchUrl"))
        .then(res => {
          return res.json();
        })
        .then(result => {
          console.log({ result });
          const { Title, Content, Image } = result;
          this.setState({
            tip: {
              ...result,
              post_title: Title,
              post_content: Content
            }
          });
        });
    } else {
      fetch(
        `https://www.winsomeglow.com/api/posts/${navigation.getParam(
          "id"
        )}/${navigation.getParam("post_slug")}`
      )
        .then(res => res.json())
        .then(result => {
          this.setState({
            tip: result.post
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  componentWillReceiveProps(props) {
    console.log({ new: props });
  }

  render() {
    const { tip } = this.state;
    let post_content = tip
      ? this.props.navigation.getParam("customFetch") !== true
        ? `<!DOCTYPE html>
    <html>
    <head>
   
    <style>
      *,a,p,span,div,b,strong{
        font-size: 50px !important;
        text-align: center;
      }
      img{
        text-align:center;
        margin 0 auto;
      }
      li,ul{
        text-align:left !important;
      }
      
    </style>
    </head>
    <body>
    
    <div id="post_content">
    ${tip.post_content
      .replace(/..\/..\/..\//g, "http://www.winsomeglow.com/")
      .replace(/<a href/g, '<a href="#"')
      .replace(/POPxo|POP/g, "Beauty Tipz")}</div>
    ${<LatestTips />}
    </body>
    </html>`
        : (post_content = `<!DOCTYPE html>
    <html>
    <head>
   
    <style>
      *,a,p,span,div,b,strong{
        font-size: 50px !important;
        text-align: center;
      }
      img{
        text-align:center;
        margin 0 auto;
      }
      li,ul{
        text-align:left !important;
      }
      
    </style>
    </head>
    <body>
    
    <div id="post_content">
    <h2>${tip.post_title}</h2><br/>
    <img src='${tip.Image}' /><br />
    ${tip.post_content
      .replace(/..\/..\/..\//g, "http://www.winsomeglow.com/")
      .replace(/<a href/g, "<a ")
      .replace(/POPxo|POP/g, "Beauty Tipz")}</div>
    </body>
    </html>`)
      : undefined;
    return (
      <Layout
        goBack={() => {
          this.props.navigation.goBack();
        }}
        title={tip && tip.post_title}
      >
        {tip && (
          <ScrollView contentContainerStyle={{ width: "100%", height: "100%" }}>
            <WebView
              originWhitelist={["*"]}
              source={{
                html: post_content
              }}
              startInLoadingState={true}
              automaticallyAdjustContentInsets={false}
            />
          </ScrollView>
        )}
      </Layout>
      /* <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container> */
    );
  }
}

export default withNavigation(TipsDetail);
