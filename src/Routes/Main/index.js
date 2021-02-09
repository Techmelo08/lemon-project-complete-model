import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";

import MainTab from "../../../tab";

import styles from "./styles";

class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden={true} />
        <View style={styles.headerContainer}>
          <Text>Main</Text>
        </View>
        <MainTab />
      </View>
    );
  }
}

export default Main;
