/** @format */

import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import Appsafeareaview from "../components/Appsafeareaview";
import Apptext from "../components/Apptext";
import Appview from "../components/Appview";
import MenuItem from "../components/RestaurantDetail/MenuItem";

const OrderCompleted = ({ route }) => {
  const { restaurantname, total, cartitems } = route.params;
  return (
    <Appsafeareaview style={`flex-1 items-center`}>
      <View style={tw`items-center`}>
        <LottieView
          source={require("../assets/check-mark.json")}
          autoPlay={true}
          loop={false}
          style={tw`w-52`}
        />
        <Apptext style={`text-xl mx-2 `}>
          Your order at ${restaurantname} has been placed for ${total}
        </Apptext>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={tw`flex-1 w-full`}
      >
        {cartitems.map((e, i) => (
          <MenuItem key={i} {...e} checkbox={false} />
        ))}
      </ScrollView>
      <Appview style={`w-full flex-1 items-center`}>
        <LottieView
          source={require("../assets/cooking.json")}
          autoPlay={true}
          loop={true}
          style={tw`w-full`}
        />
      </Appview>
    </Appsafeareaview>
  );
};

export default OrderCompleted;
