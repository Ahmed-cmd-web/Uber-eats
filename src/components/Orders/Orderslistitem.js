/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Appview from "../Appsafeareaview";
import Apptext from "../Apptext";

const Orderslistitem = ({
  restaurantname = "anything",
  cartitems = [],
  total = "anything",
}) => {
  return (
    <Appview style={`w-full h-44 flex-row justify-between`}>
      <View>
        <Apptext>{restaurantname}</Apptext>
        <Apptext>Total cost:${total}</Apptext>
      </View>
      <View>
        {cartitems.map((e, i) => (
          <Apptext key={i}>{e}</Apptext>
        ))}
      </View>
    </Appview>
  );
};

export default Orderslistitem;

const styles = StyleSheet.create({});
