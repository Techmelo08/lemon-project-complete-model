import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./styles";

import en from "./Component/Language/English.json";

import Vieww from "./Component/UI/Vieww/index";
import Picker from "./Component/UI/Picker/index";
import SwitchComponent from "./Component/UI/Switch/index";
import Button from "./Component/UI/Button/index";
import DropDown from "./Component/UI/DropDown/index";
import RadioButton from "./Component/UI/RadioButton/index";

class Renting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJoineRide: false,
      isHouseNumber: false,
    };
  }

  toggleSwitch = async (flag) => {
    // flag == 0
    //   ? this.setState({ isJoineRide: !this.state.isJoineRide })
    //   : this.setState({ isHouseNumber: !this.state.isHouseNumber });
  };

  render() {
    let { isJoineRide, isHouseNumber } = this.state;
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text>{en.ridetype}</Text>
          <RadioButton />
          <DropDown label={en.scooter} />
          <Vieww />
          <DropDown label={en.accessories} />
          <DropDown label={en["drop-of-location"]} />
          <Picker label={en["renting-start"]} />
          <Picker label={en["renting-end"]} />
          <SwitchComponent
            // flag={0}
            isEnabled={isJoineRide}
            label={en["open-to-join-ride"]}
            toggleSwitch={this.toggleSwitch}
          />
          <SwitchComponent
            // flag={1}
            isEnabled={isHouseNumber}
            label={en["show-house-number"]}
            toggleSwitch={this.toggleSwitch}
          />
          <Button label={en["palce-order"]} />
        </View>
      </ScrollView>
    );
  }
}

export default Renting;
