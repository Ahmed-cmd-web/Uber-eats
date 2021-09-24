/** @format */

import axios from "axios";
import * as firebase from "firebase";

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
    console.log("successs");
    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
};
const GET_DATA = async (url, Apikey, size = 5) => {
  try {

    const res = await axios.get(`${url}&limit=${size}`, {
      headers: {
        Authorization: `Bearer ${Apikey}`,
      },
    });

    return res;
  } catch (error) {
    
    console.log(error);
  }
};
export default { SEND_VERIFICATION_CODE, CHECK_CODE, GET_DATA };
