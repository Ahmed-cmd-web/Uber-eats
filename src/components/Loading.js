/** @format */

import LottieView from "lottie-react-native";
import React from "react";
import { Overlay } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Loading = ({ visible }) => {
  return (
    <Overlay visible={visible} overlayStyle={tw`bg-transparent`}>
      <LottieView
        source={require("../assets/loading.json")}
        autoPlay={true}
        loop={true}
        autoSize={true}
      />
    </Overlay>
  );
};

export default Loading;
