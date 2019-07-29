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
  StatusBar
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import TipsListing from "./src/components/Tips/TipsListing";
import TipsDetail from "./src/components/Tips/TipsDetail";
import AppHeader from "./src/components/includes/AppHeader";
import AppFooter from "./src/components/includes/AppFooter";

class HomeScreen extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <TipsListing />
          </ScrollView>
          <AppFooter />
        </View>
      </Fragment>
    );
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

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        // title: "Beauty Tips",
        // headerStyle: {
        //   fontSize: 30,
        //   borderBottomColor: "black",
        //   borderBottomWidth: 1,
        //   paddingBottom: 5
        // },
        // headerTitle: <Text>Home</Text>,
        // headerLeft: null,
        // headerRight: null
        header: props => <AppHeader props={props} />
      })
    },
    Detail: {
      screen: TipsDetail,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "screen"
  }
);
const App = createAppContainer(MainNavigator);

export default App;
