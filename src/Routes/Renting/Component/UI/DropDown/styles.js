import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width * 0.9,
    paddingVertical: Height * 0.01,
    borderWidth: 1,
    borderColor: "red",
  },
  dropDownContainer: {
    width: Width * 0.9,
    height: Height * 0.06,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    //alignItems: "center",
    justifyContent: "space-evenly",
  },
  labelContainer: {
    color: "gray",
    width: Width * 0.7,
    justifyContent: "center",
    borderWidth: 1,
  },
  iconContainer: {
    width: Width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});

export default styles;
