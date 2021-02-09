import styles from "./styles";
import React from "react";
import en from "../../Language/index.json";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
console.ignoredYellowBox = ["Warning:"];
let data = [
  {
    id: 1,
    code: 1,
    name: "Brake",
    price:"150$"
  },
  {
    id: 2,
    code: 2,
    name: "Chain",
    price:"140$"
  },
  {
    id: 3,
    code: 3,
    name: "Air Pressure",
    price:"130$"
  },
  {
    id: 4,
    code: 4,
    name: "Wheel Alignment",
    price:"120$"
  },
  {
    id: 5,
    code: 0,
    name: "Wheel Alignment",
    price:"110$"
  },
  {
    id: 6,
    code: 6,
    name: "Wheel Alignment",
    price:"100$"
  },
  {
    id: 7,
    code: 7,
    name: "Wheel Alignment",
    price:"150$"
  },
  {
    id: 8,
    code: 0,
    name: "Wheel Alignment",
    price:"150$"
  },
  {
    id: 9,
    code: 9,
    name: "Wheel Alignment",
    price:"150$"
  },
  {
    id: 10,
    code: 0,
    name: "zia",
    price:"150$"
  },
];

const ListView = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.textStyle}>
          Buy amazing product from our store!
        </Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View styles={styles.mainFlatlistContainer}>
            <View style={styles.flatListCard}>
              {/* <TouchableOpacity onPress={() => props.setModal()}> */}
              <TouchableOpacity onPress={() => props.getItem(item)}>
                <View style={styles.imageView}>
                  <Image
                    source={require("../../../assets/images/1.jpg")}
                    style={styles.imageStyle}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.cardBottomText}>
                <View style={styles.itemName}>
                  <Text>{item.name}</Text>
                </View>
                <View>
                  <Text>{item.price}</Text>
                </View>
              </View>
              {item.code == 0 ? (
                <View></View>
              ) : (
                <View style={styles.cardlabelView}>
                  <View style={styles.cardLabelInnerView}>
                    <Text style={styles.cardLabelTextStyle}>{item.code}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default ListView;
