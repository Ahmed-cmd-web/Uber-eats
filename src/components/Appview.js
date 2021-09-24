/** @format */

import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appearance, useColorScheme } from "react-native";
import tw from "tailwind-react-native-classnames";
import colors from "../content/colors";
const Appview = ({
  children,
  style,
  light = colors.lightmodebackground,
  dark = colors.darkmodebackground,
}) => {
  const mode = useColorScheme() === "dark" ? dark : light;
  return <View style={tw`bg-${mode} ${style}`}>{children}</View>;
};

export default Appview;
