import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width * 0.9,
    height: Height * 0.23,
  },
  mainFlatlistContainer: {
    flexDirection: "row",
    marginVertical: Height * 0.01,
  },
  labelContainer: {
    color: "gray",
  },
  checkBoxContainer: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
  },
  checkBoxlabelContainer: {
    color: "gray",
    paddingLeft: Width * 0.02,
  },
});

export default styles;
