import styles from "./styles";
import React from "react";
import { Text, View } from "react-native";

import en from "../../Language/English.json";

const Vieww = ({ props }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewOneContainer}>
        <Text>{en["e-bike"]}</Text>
      </View>
      <View style={styles.viewTwoContainer}>
        <Text>{en["children-bike"]}</Text>
      </View>
    </View>
  );
};

export default Vieww;
