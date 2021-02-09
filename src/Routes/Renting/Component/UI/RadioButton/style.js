import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width * 0.9,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: Height * 0.01,
    borderWidth: 1,
  },
  radioButtonContainer: {
    width: 25,
    height: 25,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  innerContainer: {
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});

export default styles;
