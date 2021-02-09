import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width * 0.9,
    paddingVertical: Height * 0.01,
    borderWidth: 1,
    borderColor: "blue",
  },
  viewOneContainer: {
    marginVertical: 1,
    width: Width * 0.9,
    height: Height * 0.07,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    paddingHorizontal: Width * 0.03,
  },
  viewTwoContainer: {
    width: Width * 0.9,
    height: Height * 0.07,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: "gray",
    justifyContent: "center",
    paddingHorizontal: Width * 0.03,
  },
});

export default styles;
