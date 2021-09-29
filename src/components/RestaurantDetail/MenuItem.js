/** @format */

import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Appview from "../Appview";
import Apptext from "../Apptext";
import tw from "tailwind-react-native-classnames";
import colors from "../../content/colors";
import { ADD_TO_CART, info, REMOVE_FROM_CART } from "../../redux/reducer";
const MenuItem = ({
  title = "Hey hello",
  desc = "whatsssupppp",
  price = -20,
  uri,
  checkbox = true,
}) => {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector(info);
  useEffect(() => {
    if (cart.findIndex((i) => i.uri === uri) === -1) return;
    setAdded(true);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        setAdded(!added);
        !added
          ? dispatch(
              ADD_TO_CART({
                title,
                desc,
                price,
                uri,
              })
            )
          : dispatch(REMOVE_FROM_CART(uri));
      }}
    >
      <Appview
        style={`w-full flex-1 flex-row border border-l-0 border-r-0 p-5 items-center border-${colors.darkgrey}`}
      >
        {checkbox && (
          <CheckBox
            checked={added}
            checkedColor={"#28a745"}
            onPress={() => {
              setAdded(!added);
              !added
                ? dispatch(
                    ADD_TO_CART({
                      title,
                      desc,
                      price,
                      uri,
                    })
                  )
                : dispatch(REMOVE_FROM_CART(uri));
            }}
          />
        )}

        <View style={tw`flex-1 px-3 h-full justify-evenly`}>
          <Apptext style={`font-bold text-lg `}>{title}</Apptext>
          <Apptext ellipsizeMode="tail" numberOfLines={3} style={`w-full`}>
            {desc}
          </Apptext>
          <Apptext>${price}</Apptext>
        </View>
        <Image
          source={{ uri }}
          defaultSource={require("../../assets/images/bg1.jpg")}
          style={tw`h-24 rounded w-24`}
        />
      </Appview>
    </TouchableOpacity>
  );
};

export default MenuItem;
