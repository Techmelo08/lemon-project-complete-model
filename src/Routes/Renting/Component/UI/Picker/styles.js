import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width * 0.9,
    height: Height * 0.07,
    borderWidth: 2,
    borderColor: "orange",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  mainPickerView: {
    width: Width * 0.7,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
  },
  mainPickerViewIcon: {
    width: Width * 0.1,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
