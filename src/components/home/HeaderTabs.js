/** @format */

import React from "react";
import { useColorScheme } from "react-native";
import Appview from "../Appview";
import { ButtonGroup } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import colors from "../../content/colors";
const HeaderTabs = ({ active, setactive }) => {
  const mode = useColorScheme();
  const whitetodark =
    mode === "dark" ? colors.lightmodebackground : colors.darkmodebackground;
  const darktowhite =
    mode === "dark" ? colors.darkmodebackground : colors.lightmodebackground;
  const tabs = ["Delivery", "Pickup"];
  return (
    <Appview>
      <ButtonGroup
        containerStyle={tw` w-1/2 rounded-full `}
        buttons={tabs}
        selectedButtonStyle={tw`bg-${whitetodark}`}
        selectedTextStyle={tw`text-${darktowhite}`}
        buttonContainerStyle={tw`bg-${darktowhite} `}
        textStyle={tw`text-${whitetodark}`}
        selectedIndex={tabs.indexOf(active)}
        onPress={(e) => setactive(tabs[e])}
        activeOpacity={0.2}
      />
    </Appview>
  );
};

export default HeaderTabs;
