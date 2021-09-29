/** @format */

import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Appview from "../Appsafeareaview";
import Apptext from "../Apptext";

const Orderslistitem = ({
  restaurantname = "anything",
  cartitems = [],
  total = "anything",
}) => {
  return (
    <Appview style={`w-full  flex-row justify-between`}>
      <View style={tw`w-full  flex-row justify-between p-5 border-b-2`}>
        <View>
          <Apptext style={`font-bold text-lg`}>{restaurantname}</Apptext>
          <Apptext>Total cost:${total}</Apptext>
        </View>
        <View style={tw`w-1/4`}>
          {cartitems.map((e, i) => (
            <Apptext key={i}>{e.title}</Apptext>
          ))}
        </View>
      </View>
    </Appview>
  );
};

export default Orderslistitem;
