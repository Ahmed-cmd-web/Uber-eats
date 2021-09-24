/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Appbutton = ({
  placeholder,
  bg,
  placeholderstyles = null,
  disabled = false,
  onpress,
}) => {
  return (
    <Button
      disabled={disabled}
      title={placeholder}
      buttonStyle={tw`bg-${bg} `}
      titleStyle={tw`${placeholderstyles}`}
      containerStyle={tw` rounded-full w-full m-2`}
      onPress={onpress}
    />
  );
};

export default Appbutton;
