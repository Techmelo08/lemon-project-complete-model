import styles from "./style";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import en from "../../Language/English.json";

const RadioButton = ({ props }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.radioButtonContainer}>
        <View style={styles.innerContainer}></View>
      </View>
      <Text>{en.r1}</Text>
      <View style={styles.radioButtonContainer}>
        <View style={styles.innerContainer}></View>
      </View>
      <Text>{en.r1}</Text>
    </View>
  );
};

export default RadioButton;
