import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

import ListView from "./Component/UI/ListView/index";
import Button from "../../Componens/GlobalUIComponents/Button/index";
import Picker from "../../Componens/GlobalUIComponents/Picker/index";

import en from "./Component/Language/index.json";

class Maintenance extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView />
        <Picker label={en["prefered-date-time"]} />
        <Button label={en["palce-order"]} />
      </View>
    );
  }
}

export default Maintenance;
