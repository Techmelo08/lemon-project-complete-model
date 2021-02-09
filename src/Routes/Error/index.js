import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

class Error extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Error!</Text>
      </View>
    );
  }
}

export default Error;
