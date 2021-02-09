import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    marginBottom: Height * 0.1,
    fontFamily: "Roboto",
    fontStyle: "italic",
    textAlign: "center",
    top: Height * 0.05,
    fontSize: 16,
  },

  mainFlatlistContainer: {
    marginTop: Width * 0.1,
    flex: 1,
  },
  flatListCard: {
    flexDirection: "column",
    margin: Width * 0.03,
    borderColor: "#9e9e9e",
    borderWidth: 2,
    width: Width * 0.4,
    height: Height * 0.3,
    // borderWidth: 2,
    // borderColor: "red",
  },
  imageView: {
    height: Height * 0.25,
  },
  imageStyle: {
    width: Width * 0.3,
    height: Height * 0.2,
    resizeMode: "contain",
    marginTop: Height * 0.01,
    marginLeft: Width * 0.02,
  },
  cardBottomText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardlabelView: {
    alignSelf: "flex-end",
    position: "absolute",
  },
  cardLabelInnerView: {
    borderColor: "orange",
    borderWidth: 2,
    height: Height * 0.04,
    width: Width * 0.08,
  },
  cardLabelTextStyle: {
    textAlign: "center",
  },
  ButtonView: {
    bottom: 5,
  },
});

export default styles;
