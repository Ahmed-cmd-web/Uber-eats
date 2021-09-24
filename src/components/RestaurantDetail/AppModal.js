/** @format */

import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import Appview from "../../components/Appview";
import tw from "tailwind-react-native-classnames";
import Apptext from "../Apptext";
import colors from "../../content/colors";
import ViewCart from "./ViewCart";
import { TOTAL } from "../../redux/reducer";
import { useNavigation } from "@react-navigation/core";

const Appmodal = ({
  visible,
  setVisible,
  restaurantname = "cross street",
  cartitems,
}) => {
  const total = TOTAL(cartitems);
  const { navigate } = useNavigation();
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType="slide"
    >
      <Appview style={`flex-1 justify-end bg-opacity-70`}>
        <Appview style={` w-full h-1/2 items-center  `}>
          <Apptext style={`text-2xl font-bold`}>{restaurantname}</Apptext>
          <View
            style={
              (tw`w-full flex-1 items-center`,
              { overflow: "scroll", marginHorizontal: 10 })
            }
          >
            {cartitems.map((e, i) => (
              <Appview
                key={i}
                style={`flex-row w-full p-5  justify-between border-b-2 border-${colors.darkgrey}`}
              >
                <Apptext style={`font-semibold`}>{e.title}</Apptext>
                <Apptext>${e.price}</Apptext>
              </Appview>
            ))}
            <Appview style={`flex-row w-full py-5 px-2 justify-between `}>
              <Apptext style={`font-semibold`}>Subtotal</Apptext>
              <Apptext>${total}</Apptext>
            </Appview>
          </View>
          <View style={tw`flex-1 justify-center py-5  `}>
            <ViewCart
              title={"Checkout"}
              total={total}
              onPress={() => {
                navigate("Payment", {
                  total,
                  cartitems,
                  restaurantname,
                });
                setVisible(false);
              }}
            />
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Apptext style={`text-lg text-blue-500`}>Cancel</Apptext>
            </TouchableOpacity>
          </View>
        </Appview>
      </Appview>
    </Modal>
  );
};

export default Appmodal;

const styles = StyleSheet.create({});
