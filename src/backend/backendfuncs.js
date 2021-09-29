/** @format */

import axios from "axios";
import * as firebase from "firebase";
import db from "./firebase";
import * as Notifications from "expo-notifications";

const SEND_VERIFICATION_CODE = async (
  number = "",
  FirebaseRecaptchaVerifierModalref = null
) => {
  try {
    const phoneprovider = new firebase.auth.PhoneAuthProvider();
    const verificationId = await phoneprovider.verifyPhoneNumber(
      number,
      FirebaseRecaptchaVerifierModalref
    );
    return verificationId;
  } catch (error) {
    console.log(error);
  }
};

const CHECK_CODE = async (code, verificationId) => {
  try {
    const credentials = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    await firebase.auth().signInWithCredential(credentials);
    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
};
const GET_DATA = async (
  url,
  Apikey,
  size = 5,
  country = "San Fransisco",
  setloading
) => {
  try {
    setloading(true);
    const res = await axios.get(`${url}&location=${country}&limit=${size}`, {
      headers: {
        Authorization: `Bearer ${Apikey}`,
      },
    });
    setloading(false);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const GET_ORDERS = async (number, setOrders) => {
  try {
    db.collection(`orders/${number}/orders`)
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        let v = [];
        snapshot.docs.map((i) => v.push(i.data()));
        setOrders(v);
      });
  } catch (error) {
    console.log(error);
  }
};
const PLACE_ORDER = async (number, order, setloading) => {
  try {
    setloading(true);
    await db.collection(`orders/${number}/orders`).add({
      time: firebase.firestore.Timestamp.now(),
      ...order,
    });
    setloading(false);
  } catch (error) {
    setloading(false);
    console.log(error);
  }
};
const SEND_NOTIFICATION = async (title = "hello", body = "nothingreally") => {
  try {
    const { granted } = await Notifications.requestPermissionsAsync();
    if (!granted) return;
    await Notifications.scheduleNotificationAsync({
      trigger: {
        seconds: 1,
      },
      content: {
        title,
        body,
        sound: true,
      },
    });
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  SEND_VERIFICATION_CODE,
  CHECK_CODE,
  GET_DATA,
  GET_ORDERS,
  PLACE_ORDER,
  SEND_NOTIFICATION,
};
