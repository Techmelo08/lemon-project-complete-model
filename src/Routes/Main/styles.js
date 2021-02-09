import { StyleSheet, Dimensions, StatusBar } from "react-native";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Width,
    height: Height,
    borderWidth: 2,
    borderColor: "green",
  },
  headerContainer: {
    width: Width * 0.99,
    height: Height * 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0392B",
  },
});

export default styles;
