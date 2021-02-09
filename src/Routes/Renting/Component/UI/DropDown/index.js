import styles from "./styles";
import React from "react";
import { Text, View, Pressable } from "react-native";

import { Octicons } from "@expo/vector-icons";

import en from "../../Language/English.json";

const DropDown = (props) => {
  console.log("Props =", props);
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.dropDownContainer}>
        <View style={styles.labelContainer}>
          <Text>{props.label}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Octicons name="triangle-down" color="gray" size={17} />
        </View>
      </Pressable>
    </View>
  );
};

export default DropDown;
