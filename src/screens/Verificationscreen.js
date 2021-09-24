/** @format */

import React, { useRef, useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Appbutton from "../components/Appbutton";
import Apptextinput from "../components/Apptextinput";
import Apptext from "../components/Apptext";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import colors from "../content/colors";
import backendfuncs from "../backend/backendfuncs";
import db, { firebaseConfig } from "../backend/firebase";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/reducer";
import Loading from "../components/Loading";
const Verificationscreen = ({ route }) => {
  const { verificationId, name, number } = route.params;
  const [code, setCode] = useState(null);
  const [err, setErr] = useState(false);
  const [verid, setVerid] = useState(verificationId);
  const [loading, setLoading] = useState(false);
  const recaptcha = useRef();
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPressOut={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
        }}
      >
        <Loading visible={loading} />
        <Apptextinput onchange={setCode} placeholder="6-digit code" />
        {err && (
          <Apptext style={`text-red-500 text-lg`}>
            Check your code or try resending.
          </Apptext>
        )}
        <Appbutton
          bg={colors.green}
          placeholder="Confirm verification code"
          onpress={async () => {
            try {
              setLoading(true);
              const { ok } = await backendfuncs.CHECK_CODE(code, verid);
              if (!ok) {
                setLoading(false);
                return setErr(true);
              }
              setErr(false);
              await db.doc(`orders/${number}`).set({
                name,
                number,
              });
              setLoading(false);
              return dispatch(
                SET_USER({
                  name,
                  number,
                })
              );
            } catch (error) {
              setLoading(false);
              console.log(error);
            }
          }}
        />
        <FirebaseRecaptchaVerifierModal
          ref={recaptcha}
          firebaseConfig={firebaseConfig}
        />

        <Apptext>Didn't recieve anything?</Apptext>
        <Appbutton
          placeholder="Resend"
          bg={colors.red}
          onpress={async () => {
            try {
              const res = await backendfuncs.SEND_VERIFICATION_CODE(
                number,
                recaptcha.current
              );
              if (!res) return;
              return setVerid(res);
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Verificationscreen;

const styles = StyleSheet.create({});
