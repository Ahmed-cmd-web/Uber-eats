/** @format */

import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import AntDesign from "react-native-vector-icons/AntDesign";
import Appview from "../components/Appview";
import Apptext from "../components/Apptext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../content/colors";
import Design from "../components/Design";
import Homestack from "./Homestack";
import Accountscreen from "../screens/Accountscreen";
import Orderscreen from "../screens/Orderscreen";
const Tabs = createBottomTabNavigator();
const Apptabs = () => {
  const mode = useColorScheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor:
            mode === "dark"
              ? "background-color:rgba(31, 41, 55, 1)"
              : "background-color: rgba(243, 244, 246, 1)",
          borderTopWidth: 0,
        },
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: mode === "dark" ? "white" : "black",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Homestack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Browse"
        component={Design}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Grocery"
        component={Design}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Orders"
        component={Design}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="receipt" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Accountscreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Apptabs;

const styles = StyleSheet.create({});
