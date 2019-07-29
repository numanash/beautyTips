import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { WebView } from "react-native-webview";

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
  render() {
    const { tip } = this.state;
    tip &&
      console.log({
        tip: tip.post_content
          .replace(/..\/..\/..\//g, "http://www.winsomeglow.com/")
          .replace(/<span/g, "<span style='font-size:50pt' ")
      });
    return (
      <View>
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
                                    var spans = document.getElementsByTagName('span');
                                    for(var j=0;j<spans.length;j++){
                                        spans[j].style.fontSize= '50px';
                                    }
                            for(i=0;i<childs.length;i++)
                            {
                                childs[i].style.fontSize = '50px';
                            }`}
              startInLoadingState={true}
              automaticallyAdjustContentInsets={false}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}

export default withNavigation(TipsDetail);
