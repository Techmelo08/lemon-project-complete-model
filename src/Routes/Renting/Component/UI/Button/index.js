import styles from "./styles";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import en from "../../Language/English.json";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.labelContainer}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
