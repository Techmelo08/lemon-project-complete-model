import React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// ROUTES

import Store from "./src/Routes/Store/index";
import Renting from "./src/Routes/Renting/index";
import Maintenance from "./src/Routes/Maintenance/index";
import styles from "./src/Routes/Maintenance/Component/UI/ListView/styles";

//Width Height
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
const tabBarWidth = Width - 5;
// NAVIGATIONS
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Renting"
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "#000000",
        style: {
          backgroundColor: "#C0392B",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },

        indicatorStyle: {
          width: Width * 0.15,
          marginLeft: Width * 0.09,
          backgroundColor: "yellow",
          position: "absolute",
          padding: 1,
        },
        tabStyle: {
          justifyContent: "center",
          width: tabBarWidth / 3,
        },
        labelStyle: {
          marginTop: 1,
        },
      }}
    >
      <Tab.Screen name="Renting" component={Renting} />
      <Tab.Screen name="Maintenance" component={Maintenance} />
      <Tab.Screen name="Store" component={Store} />
    </Tab.Navigator>
  );
}

function OthersTabs() {
  return (
    <Tab.Navigator>
      <Stack.Screen
        name="Error"
        component={Error}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
