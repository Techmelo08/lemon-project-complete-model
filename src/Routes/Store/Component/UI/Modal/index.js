import styles from "./styles";
import React, { Component } from "react";
import { Entypo } from "@expo/vector-icons";
import { View, Text, Modal, TouchableOpacity } from "react-native";
console.disableYellowBox = true;

let title;
let price;
let isCancle;
let isModalVisable;
let count
let priceControl

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    title = this.props.title;
    price = this.props.price;
    count  = this.props.count;
    isCancle = this.props.isCancle;
    priceControl=this.props.priceControl;
    isModalVisable = this.props.isModalVisable;
    return (
      <Modal transparent={true} visible={isModalVisable}>
        <View style={styles.modalMainTouchContainer}>
          <View style={styles.insideModalMainView}>
            <View style={styles.modalCrossIconContainer}>
              <TouchableOpacity onPress={() => this.props.setModal()}>
                <Entypo name="cross" size={30} color="#fafafa" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalTitalViewContainer}>
              <Text style={styles.modalTitalTextContainer}>{title}</Text>
            </View>
            
            <View style={styles.counterViewContainer}>
              <View style={styles.counterButtonContainer}>
                <Text style={styles.counterTextContainer}>{count-1}</Text>
              </View>
              <View style={styles.counterClickTouchableButtonContainer}>
                <TouchableOpacity style={styles.counterClickTouchable} onPress={() => this.props.setCount()}>
                <Entypo name="chevron-up" style={styles.couterClickupButtonText}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.counterClickTouchable} onPress={() => this.props.setCountDecrement()}>
                <Entypo name="chevron-down" style={styles.couterClickDownButtonText}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.modalMainPriceViewContainer}>
              <Text style={styles.modalMainPriceTextContainer}>
                {priceControl}
              </Text>
            </View>
            <View style={styles.modalButtonViewContainer}>
              <TouchableOpacity
                onPress={() => this.props.setModal()}
                style={styles.okButtonContainer}
              >
                <Text style={styles.okButtonTextContainer}>OK</Text>
              </TouchableOpacity>
              {isCancle && (
                <TouchableOpacity
                  onPress={() => this.props.setModal()}
                  style={styles.cancleButtonContainer}
                >
                  <Text style={styles.cancleButtonTextContainer}>CANCLE</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
