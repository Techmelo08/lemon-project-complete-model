import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

console.disableYellowBox = true;

// ROUTES

import Main from "./src/Routes/Main/index";

import Store from "./src/Routes/Store/index";
import Renting from "./src/Routes/Renting/index";
import Maintenance from "./src/Routes/Maintenance/index";

import Error from "./src/Routes/Error/index";

// NAVIGATIONS
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export function MainTab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Renting" component={Renting} />
//       <Tab.Screen name="Maintenance" component={Maintenance} />
//       <Tab.Screen name="Store" component={Store} />
//     </Tab.Navigator>
//   );
// }
