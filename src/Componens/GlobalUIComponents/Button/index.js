import styles from "./styles";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.labelContainer}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
