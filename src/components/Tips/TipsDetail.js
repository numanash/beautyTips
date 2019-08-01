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

class TipsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: undefined
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    fetch(
      `https://www.winsomeglow.com/api/posts/${navigation.getParam(
        "id"
      )}/${navigation.getParam("post_slug")}`
    )
      .then(res => res.json())
      .then(result => {
        console.log({ result });
        this.setState({
          tip: result.post
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentWillReceiveProps(props) {
    console.log({ new: props });
  }

  render() {
    const { tip } = this.state;
    tip &&
      console.log({
        tip: tip.post_content
          .replace(/..\/..\/..\//g, "http://www.winsomeglow.com/")
          .replace(/<span/g, "<span style='font-size:50pt' ")
      });
    console.log({ props: this.props });
    return (
      <Container>
        <Header hasSubtitle>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Beauty Tip Detail</Title>
          </Body>
          <Right />
        </Header>
        {tip && (
          <ScrollView contentContainerStyle={{ width: "100%", height: "100%" }}>
            <WebView
              originWhitelist={["*"]}
              source={{
                html: `<div id="post_content">${tip.post_content.replace(
                  /..\/..\/..\//g,
                  "http://www.winsomeglow.com/"
                )}`
              }}
              injectedJavaScript={`var childs=document.getElementById('post_content').children;
                            for(i=0;i<childs.length;i++)
                            {
                                childs[i].style.fontSize = '50px';
                            }
                                    var spans = document.getElementsByTagName('span');
                                   if(spans.length > 0){
                                    for(var j=0;j<spans.length;j++){
                                        spans[j].style.fontSize= '50px';
                                    }
                                }
                            `}
              startInLoadingState={true}
              automaticallyAdjustContentInsets={false}
            />
          </ScrollView>
        )}
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default withNavigation(TipsDetail);
