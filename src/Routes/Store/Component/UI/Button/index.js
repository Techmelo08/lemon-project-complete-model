import styles from "./styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity 
    onPress={()=>props.onPress()}
    style={styles.buttonContainer}>
      <Text style={styles.labelContainer}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
