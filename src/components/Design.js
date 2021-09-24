/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Apptext from "./Apptext";
import Appview from "./Appview";

const Design = () => {
  return (
    <Appview style={`flex-1 justify-center items-center`}>
      <Apptext style={`text-4xl`}>For design purposes only.</Apptext>
    </Appview>
  );
};

export default Design;

const styles = StyleSheet.create({});
