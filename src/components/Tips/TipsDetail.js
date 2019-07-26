import React, { Component } from 'react';
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
class TipsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tip: undefined
        }
    }
    componentDidMount() {
        const { navigation } = this.props;
        fetch(`https://www.winsomeglow.com/api/posts/${navigation.getParam('id')}/${navigation.getParam('post_slug')}`)
            .then(res => res.json())
            .then(result => {
                console.log({ result });
            }).catch(e => {
                console.log(e);
            })
    }
    render() {
        return (<View>
            <Text>welcome to tips details</Text>
        </View >);
    }
}

export default withNavigation(TipsDetail);