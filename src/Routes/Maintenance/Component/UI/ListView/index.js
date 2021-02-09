import styles from "./styles";
import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

import en from "../../Language/index.json";

let data = [
  {
    id: 1,
    name: "Brake",
  },
  {
    id: 2,
    name: "Chain",
  },
  {
    id: 3,
    name: "Air Pressure",
  },
  {
    id: 4,
    name: "Wheel Alignment",
  },
];

const ListView = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.labelContainer}>{en.title}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.mainFlatlistContainer}>
            <View style={styles.checkBoxContainer}></View>
            <View>
              <Text style={styles.checkBoxlabelContainer}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListView;
