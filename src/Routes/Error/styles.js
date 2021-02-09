import { StyleSheet, Dimensions } from "react-native";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
