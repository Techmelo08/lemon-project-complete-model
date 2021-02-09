import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  buttonContainer: {
    width: Width * 0.9,
    height: Height * 0.08,
    marginVertical: Height * 0.08,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 1,
  },
  labelContainer: {
    color: "gray",
  },
});

export default styles;
