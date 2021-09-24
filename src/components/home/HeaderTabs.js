/** @format */

import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import Appview from "../Appview";
import { ButtonGroup } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import colors from "../../content/colors";
const HeaderTabs = ({ active, setactive }) => {
  const mode = useColorScheme();
  const tabs = ["Delivery", "Pickup"];
  return (
    <Appview>
      <ButtonGroup
        containerStyle={tw` w-1/2 rounded-full `}
        buttons={tabs}
        selectedButtonStyle={tw`bg-${
          mode === "dark"
            ? colors.lightmodebackground
            : colors.darkmodebackground
        }`}
        selectedTextStyle={tw`text-${
          mode === "dark"
            ? colors.darkmodebackground
            : colors.lightmodebackground
        }`}
        buttonContainerStyle={tw`bg-${
          mode === "dark"
            ? colors.darkmodebackground
            : colors.lightmodebackground
        } `}
        textStyle={tw`text-${
          mode === "dark"
            ? colors.lightmodebackground
            : colors.darkmodebackground
        }`}
        selectedIndex={tabs.indexOf(active)}
        onPress={(e) => setactive(tabs[e])}
        activeOpacity={0.2}
      />
    </Appview>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({});
