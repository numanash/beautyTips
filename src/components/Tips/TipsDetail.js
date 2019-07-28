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
                {tip && (
                    <ScrollView contentContainerStyle={{ width: "100%", height: "100%" }}>
                        <WebView
                            originWhitelist={["*"]}
                            source={{
                                html: `<div id="post_content">${tip.post_content.replace(
                                    "../../../",
                                    "http://www.winsomeglow.com/"
                                )}`
                            }}
                            injectedJavaScript={`var s=document.getElementById('post_content').children;
                            for(i=0;i<s.length;i++)
                            {
                                if(s[i].hasAttribute("style") && s[i].tagName == "SPAN"){
                                    console.log(s[i]);
                                    s[i].removeAttribute("style");
                                    s[i].setAttribute("style","font-size:60pt");
                                }else{
                                    s[i].setAttribute("style","font-size:60px");
                                }
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
