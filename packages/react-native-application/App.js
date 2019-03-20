import React, { Component } from "react";
import {createStackNavigator, createAppContainer} from "react-navigation"
import Test from "components/src/Test";
import PageTwo from "components/src/PageTwo";

const HomeStack = createStackNavigator({
  Home: { screen: Test,
    navigationOptions: {
        title: "Home",
        swipeEnabled: false,
        header: null
      }
  },
  PageTwo: { screen: PageTwo,
    navigationOptions: {
        title: "PageTwo",
        swipeEnabled: false,
        header: null
      }
  }
});


const App = createAppContainer(HomeStack);

export default App;