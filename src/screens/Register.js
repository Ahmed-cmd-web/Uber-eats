/** @format */

import React, { useRef, useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import Appview from "../components/Appview";
import Apptextinput from "../components/Apptextinput";
import registerscreencontent from "../content/registerscreencontent";
import Appbutton from "../components/Appbutton";
import Apptext from "../components/Apptext";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import tw from "tailwind-react-native-classnames";
import PhoneInput from "react-native-phone-number-input";
import colors from "../content/colors";
import { firebaseConfig } from "../backend/firebase";
import { useNavigation } from "@react-navigation/core";
import backendfuncs from "../backend/backendfuncs";

const Register = () => {
  const navigation = useNavigation();
  const mode = useColorScheme() === "dark" ? true : false;
  const ref = useRef();
  const recaptcha = useRef();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <Appview style={`flex-1 p-5 items-center justify-start  `}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptcha}
        firebaseConfig={firebaseConfig}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Apptext style={`text-lg my-2`}>
            Name must be at least 3 characters long.
          </Apptext>
          <Apptext style={`text-lg my-2`}>
            An SMS will be sent to this number.
          </Apptext>
        </View>
      </TouchableWithoutFeedback>

      <Apptextinput
        {...registerscreencontent[0]}
        onchange={(e) => setName(e)}
      />

      <View style={tw`w-full border-2 border-gray-300  rounded-full`}>
        <PhoneInput
          ref={ref}
          defaultCode="US"
          layout="first"
          containerStyle={tw`w-full rounded-full overflow-hidden`}
          withDarkTheme={mode}
          onChangeFormattedText={(e) => setNumber(e)}
        />
      </View>
      <Appbutton
        placeholder={"Send verification code"}
        bg={colors.red}
        onpress={async () => {
          try {
            if (!(name.length >= 3 && ref.current?.isValidNumber(number)))
              return;
            const res = await backendfuncs.SEND_VERIFICATION_CODE(
              number,
              recaptcha?.current
            );
            if (!res) return;

            navigation.navigate("Verification", {
              verificationId: res,
              number,
              name,
            });
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </Appview>
  );
};

export default Register;
