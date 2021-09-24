/** @format */

import React from "react";
import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcomescreen from "../screens/Welcomescreen";
import Register from "../screens/Register";
import Verificationscreen from "../screens/Verificationscreen";
const Stack = createNativeStackNavigator();
const Welcomestack = () => {
  const mode = useColorScheme() === "dark" ? "black" : "white";
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: mode,
        },
        contentStyle: {
          backgroundColor: mode,
        },
      }}
    >
      <Stack.Screen
        component={Welcomescreen}
        name="Welcome"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{
          headerTintColor: "red",
        }}
      />
      <Stack.Screen
        name="Verification"
        component={Verificationscreen}
        options={{
          headerTintColor: "rgba(16, 185, 129, 1)",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Welcomestack;
