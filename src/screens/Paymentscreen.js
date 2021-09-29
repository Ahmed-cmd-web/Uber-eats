/** @format */

import React, { useState } from "react";
import {
  View,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { CardField } from "@stripe/stripe-react-native";
import Appview from "../components/Appview";
import LottieView from "lottie-react-native";
import tw from "tailwind-react-native-classnames";
import Apptext from "../components/Apptext";
import AppButton from "../components/Appbutton";
import colors from "../content/colors";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import backendfuncs from "../backend/backendfuncs";
const Paymentscreen = ({ navigation, route }) => {
  const { total } = route.params;
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const mode = useColorScheme();
  return (
    <Appview style={`flex-1 p-5 `}>
      <ScrollView
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never"
      >
        <View style={tw` flex-1 items-center justify-center `}>
          <Loading visible={loading} />
          <Apptext style={`text-3xl font-bold `}>Just one more step!</Apptext>
          <Apptext style={`text-xl font-medium `}>
            Verify your payment to place the order!
          </Apptext>
        </View>
        <View style={tw`flex-1 items-center`}>
          <LottieView
            source={require("../assets/paymentanimation.json")}
            loop={true}
            autoPlay={true}
            style={tw`w-full`}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
        >
          <View style={tw` items-center`}>
            <CardField
              onCardChange={({ complete }) => setComplete(complete)}
              placeholder={{
                number: "4242 4242 4242 4242",
              }}
              style={tw`w-full h-12 `}
              postalCodeEnabled={false}
            />
            <AppButton
              disabled={!complete}
              bg={
                mode === "dark"
                  ? colors.lightmodebackground
                  : colors.darkmodebackground
              }
              onpress={async () => {
                try {
                  await backendfuncs.PLACE_ORDER(
                    user.number,
                    route.params,
                    setLoading
                  );
                  await backendfuncs.SEND_NOTIFICATION(
                    "Congratulations!🎉",
                    `You've placed your order successfully!`
                  );
                  navigation.navigate("Ordercompleted", route.params);
                } catch (error) {
                  console.log(error);
                }
              }}
              placeholder={`Pay $${total}`}
              placeholderstyles={`text-${
                mode === "dark"
                  ? colors.darkmodebackground
                  : colors.lightmodebackground
              }`}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Appview>
  );
};

export default Paymentscreen;
