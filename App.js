/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import TipsDetail from "./src/components/Tips/TipsDetail";
import AppHeader from "./src/components/includes/AppHeader";
import Main from "./src/Main";
import SideBar from "./src/components/includes/Sidebar";
import AppFooter from "./src/components/includes/AppFooter";
import { Root } from "native-base";
import TipsListing from "./src/components/Tips/TipsListing";
import LatestTips from "./src/components/Tips/LatestTips";

// Color Scheme

// #0e0b16 void,
// #a239ca fuschia
// #4717f6 jewel
// #e7dfdd

class HomeScreen extends React.Component {
  state = {};
  render() {
    return <LatestTips />;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: TipsDetail
    },
    Listing: {
      screen: TipsListing
    }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

// const MainNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: ({ navigation }) => ({
//         header: props => <AppHeader props={props} />
//       })
//     },
//     Detail: {
//       screen: TipsDetail,
//       navigationOptions: {
//         header: null
//       }
//     }
//   },
//   {
//     initialRouteName: "Home",
//     headerMode: "screen"
//   }
// );

const MainNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: HomeScreen },
    Detail: { screen: TipsDetail },
    Listing: { screen: TipsListing }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);
const App = createAppContainer(MainNavigator);

export default () => (
  <Root>
    <App />
  </Root>
);
