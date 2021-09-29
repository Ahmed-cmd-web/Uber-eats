/** @format */

import React, { useEffect, useState } from "react";
import {
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import colors from "../../content/colors";
import { info } from "../../redux/reducer";
import Apptext from "../Apptext";
import Appview from "../Appview";

const ViewCart = ({ length = 0, total = 33.9, onPress, title, styles }) => {
  const { cart } = useSelector(info);
  const [width, setWidth] = useState(0);

  //to give it that smooth slide animation
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  useEffect(() => {
    LayoutAnimation.linear();
    if (cart.length > 0) return setWidth(60);
    return setWidth(0);
  }, [cart.length]);
  return (
    <TouchableOpacity
      style={tw` ${styles} justify-end items-center`}
      onPress={() => onPress(true)}
    >
      <Appview
        style={` w-${width}  rounded-full  flex-row justify-evenly items-center h-12 `}
        light={colors.darkmodebackground}
        dark={colors.lightmodebackground}
      >
        {length > 0 && (
          <Apptext
            light={colors.darkmodebackground}
            dark={colors.lightmodebackground}
          >
            {length}
          </Apptext>
        )}
        <Apptext
          light={colors.darkmodebackground}
          dark={colors.lightmodebackground}
        >
          {title}
        </Apptext>
        <Apptext
          light={colors.darkmodebackground}
          dark={colors.lightmodebackground}
        >
          ${total}
        </Apptext>
      </Appview>
    </TouchableOpacity>
  );
};

export default ViewCart;
