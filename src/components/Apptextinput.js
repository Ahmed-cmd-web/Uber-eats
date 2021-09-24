/** @format */

import React from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Appview from "./Appview";
import { Input } from "react-native-elements";
import colors from "../content/colors";

const Apptextinput = ({
  placeholder = "type something...",
  onchange,
  type = null,
  iconname = null,
  keyboardtype = null,
  size = 35,
}) => {
  return (
    <View style={tw`w-full border-2 rounded-full bg-${colors.grey} my-2`}>
      <Input
        containerStyle={tw`px-5 `}
        inputStyle={tw` justify-center  `}
        leftIcon={{ type: type, name: iconname, size: size }}
        placeholder={placeholder}
        onChangeText={onchange}
        keyboardType={keyboardtype}
        returnKeyType="next"
      />
    </View>
  );
};

export default Apptextinput;

const styles = StyleSheet.create({});
