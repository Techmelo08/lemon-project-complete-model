import styles from "./styles";
import React, { Component } from "react";
import { View } from "react-native";
import ListView from "./Component/UI/ListView/";
import Modal from "./Component/UI/Modal/index";
import ButtonComponent from "./Component/UI/Button/index";

console.disableYellowBox = true;

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      count: 1,
      priceControl: "",
      isModalVisable: false,
    };
  }


  setModal = async () => {
    this.setState({ isModalVisable: !this.state.isModalVisable, count: 1 });
  };
  getItem = async (item) => {
    this.setState({
      name: item.name,
      price: item.price,
      isModalVisable: !this.state.isModalVisable,
    });
  };

  setCount = async () => {
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count + 1,
    }));
    this.setState({
      priceControl: parseInt(this.state.price.toString()) * this.state.count,
    });
  };
  setCountDecrement = async () => {
    if (this.state.count <= 1) {
      this.setState({
        count: 1,
      
      });
      
    } else {
      this.setState({
        count: this.state.count - 1,
        priceControl:parseInt(this.state.priceControl) - parseInt(this.state.price)
      });
    }
  };

  onPress = async ()=>{
    alert("You press me");
  }

  render() {
    let { name, count, isModalVisable, price, priceControl } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Modal
          title={name}
          price={price}
          count={count}
          priceControl={priceControl}
          isCancle={true}
          setModal={this.setModal}
          setCount={this.setCount}
          isModalVisable={isModalVisable}
          setCountDecrement={this.setCountDecrement}
        />
        <ListView getItem={this.getItem} setModal={this.setModal} />
        <ButtonComponent
        label={"Place Order"}
        onPress={this.onPress}
        />
      </View>
    );
  }
}

export default Store;
