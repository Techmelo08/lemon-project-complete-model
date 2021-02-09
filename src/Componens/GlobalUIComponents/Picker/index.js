import styles from "./styles";
import React from "react";
import { Text, View, Pressable } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const Picker = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainPickerView}>
        <Text>{props.label}</Text>
      </View>
      <View style={styles.mainPickerViewIcon}>
        <FontAwesome5 name="calendar-alt" color="black" size={21} />
      </View>
    </View>
  );
};

export default Picker;
