/** @format */

import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import LottieView from "lottie-react-native";
import { Text } from "react-native-elements";
import Appbutton from "../components/Appbutton";
import welcomescreencontent from "../content/welcomescreencontent";
import Appsafeareaview from "../components/Appsafeareaview";
import Apptext from "../components/Apptext";
import colors from "../content/colors";

const Welcomescreen = ({ navigation }) => {
  return (
    <Appsafeareaview style={`flex-1 items-center justify-center   `}>
      <Apptext style={`text-2xl`}>Uber </Apptext>
      <Text h1 style={tw`font-bold text-green-500`}>
        Eats
      </Text>
      <View style={tw`flex-auto w-full items-center justify-center`}>
        <LottieView
          source={require("../assets/welcomescreenanimation.json")}
          autoPlay={true}
          style={(tw`w-full`, { transform: [{ scale: 1.1 }] })}
        />
      </View>
      <View style={tw` w-full items-center px-5  `}>
        <Appbutton
          placeholder="Let's start"
          onpress={() => navigation.navigate("Register")}
          bg={colors.red}
        />
      </View>
    </Appsafeareaview>
  );
};

export default Welcomescreen;
