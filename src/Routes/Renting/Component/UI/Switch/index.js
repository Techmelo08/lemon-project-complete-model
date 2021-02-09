import styles from "./styles";
import React from "react";
import { Text, View, Switch } from "react-native";

const SwitchComponent = (props) => {
  let flag = props.flag;
  let isEnabled = props.isEnabled;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        <Text>{props.label}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={props.toggleSwitch(flag)}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default SwitchComponent;
