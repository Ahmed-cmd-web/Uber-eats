/** @format */

import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Appview from "./src/components/Appview";
import Apptabs from "./src/navigation/Apptabs";
import Welcomestack from "./src/navigation/Welcomestack";
import { info } from "./src/redux/reducer";

const Index = () => {
  const state = useSelector(info);
  const [user, setUser] = useState(state.user);
  useEffect(() => {
    setUser(state.user);
    console.log(user);
  }, [state.user]);

  return (
    <Appview style={`flex-1 `}>
      <NavigationContainer>
        {user?.number ? <Apptabs /> : <Welcomestack />}
      </NavigationContainer>
    </Appview>
  );
};

export default Index;

const styles = StyleSheet.create({});
