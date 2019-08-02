import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from "react-native";
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
    Button
} from "native-base";

import { withNavigation, DrawerActions } from "react-navigation";
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title ? this.props.title : "Beauty Tips"
        }
    }

    render() {
        console.log({ p: this.props });
        return (<Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={this.props.onPress}
                    >
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.state.title}</Title>
                </Body>
            </Header>
            {this.props.children}
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>);
    }
}

export default withNavigation(Layout);