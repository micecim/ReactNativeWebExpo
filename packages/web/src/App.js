import React, { Component } from "react";
import { View } from "react-native";
import WebRoutesGenerator from "components/src/NativeWebRouteWrapper";
import { ModalContainer } from "react-router-modal";
import Test from 'components/src/Test';
import PageTwo from 'components/src/PageTwo';


const routeMap = {
  Home: {
    component: Test,
    path: "/",
    exact: true
  },
  PageTwo: {
    component: PageTwo,
    path: "/two",
    exact: true
  }
};

class App extends Component {
  render() {
    return (
      <View style={{ height: "100vh", width: "100vw" }}>
        {WebRoutesGenerator({ routeMap })}
        <ModalContainer />
      </View>
    );
  }
}

export default App;
