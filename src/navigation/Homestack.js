/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import RestaurantDetail from "../screens/RestaurantDetail";
import Paymentscreen from "../screens/Paymentscreen";
import OrderCompleted from "../screens/OrderCompleted";

const Stack = createNativeStackNavigator();
const Homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Homemenu" component={Home} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetail} />
      <Stack.Screen name="Ordercompleted" component={OrderCompleted} />

      <Stack.Screen
        name="Payment"
        component={Paymentscreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default Homestack;

const styles = StyleSheet.create({});
