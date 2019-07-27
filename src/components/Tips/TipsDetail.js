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
        tip: tip.post_content.replace(
          "../../../",
          "http://www.winsomeglow.com/"
        )
      });
    return (
      <View>
        <Text>welcome to tips details</Text>
        {tip && (
          <ScrollView contentContainerStyle={{ width: "100%", height: "60%" }}>
            <WebView
              originWhitelist={["*"]}
              source={{
                html: tip.post_content.replace(
                  "../../../",
                  "http://www.winsomeglow.com/"
                )
              }}
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
