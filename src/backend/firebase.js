/** @format */

import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyChXXqrhLYiLEVBcEBE-wnrvVpJ6Rpar78",
  authDomain: "uber-eats-b1e39.firebaseapp.com",
  projectId: "uber-eats-b1e39",
  storageBucket: "uber-eats-b1e39.appspot.com",
  messagingSenderId: "981614851333",
  appId: "1:981614851333:web:890461443915a9947e736c",
  measurementId: "G-19XPS5S743",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
