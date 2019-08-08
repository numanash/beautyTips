import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
const drawerCover = require("../../../assets/images/app-background.jpg");
const drawerImage = require("../../../assets/images/beauty-tipz2.png");
const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "ios-home",
    bg: "#C5F4F2"
  },
  {
    name: "Random Beauty Tips",
    route: "Listing",
    icon: "ios-list-box",
    bg: "#C5F442"
  },
  {
    name: "Latest Tips",
    route: "LatestTips",
    icon: "ios-list-box",
    bg: "#C5F442"
  },
  {
    name: "Nail Tips",
    route: "NailsTips",
    icon: "ios-list-box",
    bg: "#C5F4F2"
  },
  {
    name: "Skin Care Tips",
    route: "SkinCareTips",
    icon: "ios-list-box",
    bg: "#C5F442"
  },
  {
    name: "Make Up Tips",
    route: "MakeupListing",
    icon: "ios-list-box",
    bg: "#C5F442"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          {/* <Text style={styles.drawerImage}>Beauty Tips 123</Text> */}
          <Image square style={styles.drawerImage} source={drawerImage} />
          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text style={styles.badgeText}>{`${
                        data.types
                      } Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
