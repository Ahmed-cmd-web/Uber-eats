/** @format */

import React from "react";
import { useColorScheme } from "react-native";
import { Text } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import colors from "../content/colors";
const Apptext = ({
  children,
  style = "",
  light = colors.lightmodebackground,
  dark = colors.darkmodebackground,
  ...p
}) => {
  const mode = useColorScheme() === "dark" ? light : dark;
  return (
    <Text style={tw`text-${mode} ${style}`} {...p}>
      {children}
    </Text>
  );
};

export default Apptext;
