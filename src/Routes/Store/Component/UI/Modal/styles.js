import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  modalMainTouchContainer: {
    width: Width,
    height: Height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  insideModalMainView: {
    width: Width * 0.8,
    height: Height * 0.5,
    borderRadius: 5,
    backgroundColor: "#f9238b",
  },
  modalTitalViewContainer: {
    width: Width * 0.8,
    height: Height * 0.07,
    alignItems: "center",
    justifyContent: "center",
    
  },
  modalTitalTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 23,
    color: "yellow",
    bottom:30,
    top:10,
  },
  modalMainPriceViewContainer: {
    width: Width * 0.8,
    height: Height * 0.15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Width * 0.07,
  },
  modalMainPriceTextContainer: {
    fontSize: 20,
    color: "#fafafa",

  },
  modalButtonViewContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  okButtonContainer: {
    width: Width * 0.3,
    height: Height * 0.06,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  okButtonTextContainer: {
    fontSize: 15,
    color: "red",
  },
  cancleButtonContainer: {
    width: Width * 0.3,
    height: Height * 0.06,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  cancleButtonTextContainer: {
    fontSize: 15,
    color: "red",
  },
  modalCrossIconContainer:{
    alignItems:'flex-end',
    marginRight:Width*0.01,
    marginTop:Height*0.01

  },
  modelIconStyle:{
    color:'#fafafa',
    fontSize:25
  },
  counterViewContainer:{
    justifyContent: 'space-around',
    flexDirection:'row',
    borderWidth:2,
    borderColor:'#fafafa',
    marginHorizontal:70,
    borderRadius:10,
    bottom:30,
    top:20,
    padding: 20,
   
  },
  counterButtonContainer:{
    width:50,
   height:30,
   alignSelf:"center"

  },
  counterTextContainer:{
    color:'#fafafa',
    fontSize:20
    
  },
  counterClickTouchableButtonContainer:{
  padding: 2,

  },
  couterClickupButtonText:{
    color:'#fafafa',
    fontSize:20
  },
  couterClickDownButtonText:{
    color:'#fafafa',
    fontSize:20

  },
  counterClickTouchableDown:{
    alignSelf:'flex-end',
  },
  counterClickTouchable:{
    alignSelf:'flex-end'

  }
});

export default styles;
