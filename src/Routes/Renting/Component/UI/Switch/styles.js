import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width * 0.9,
    flexDirection: "row",
    paddingVertical: Height * 0.01,
    justifyContent: "space-evenly",
    borderWidth: 1,
  },
  labelContainer: {
    width: Width * 0.7,
    justifyContent: "center",
    borderWidth: 1,
  },
  switchContainer: {
    width: Width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});

export default styles;
