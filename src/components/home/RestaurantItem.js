/** @format */

import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Appview from "../Appview";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../content/colors";
import SkeletonContent from "react-native-skeleton-content";
import { useNavigation } from "@react-navigation/core";
import Apptext from "../Apptext";

const RestaurantItem = ({
  name = "Farm house",
  image_url,
  rating = 5,
  loading,
  ...p
}) => {
  const { navigate } = useNavigation();
  const mode = useColorScheme();
  return (
    <SkeletonContent
      isLoading={loading}
      containerStyle={{
        margin: 10,
        height: 250,
      }}
      boneColor={mode === "dark" ? "#121212" : undefined}
      highlightColor={mode === "dark" ? "#333333" : undefined}
      animationType="pulse"
      layout={[
        { key: "image", width: 400, height: 180 },
        { key: "name", width: 150, height: 20, marginVertical: 5 },
        { key: "time", width: 100, height: 20, marginVertical: 5 },
      ]}
    >
      <TouchableOpacity
        style={tw`w-full   items-center`}
        onPress={() =>
          navigate("RestaurantDetails", {
            name,
            image_url,
            rating,
            ...p,
          })
        }
      >
        <Appview style={`w-full   py-3 items-center`}>
          <View style={tw`w-full px-3 h-4/5  relative `}>
            <AntDesign
              name="hearto"
              size={25}
              color={"white"}
              style={tw`absolute right-10 top-5 z-50`}
            />
            <Image
              source={{ uri: image_url }}
              style={(tw`w-full`, { height: 180 })}
              defaultSource={require("../../assets/splash.png")}
            />
          </View>
          <View
            style={tw`flex-row w-full justify-between h-1/5 px-3 items-center  `}
          >
            <View>
              <Apptext style={`font-bold text-base`}>{name}</Apptext>
              <Apptext light={colors.darkgrey}>35-45 min</Apptext>
            </View>
            <View style={tw`rounded-full bg-${colors.darkgrey}`}>
              <Apptext style={`py-2 px-3`}>{rating}</Apptext>
            </View>
          </View>
        </Appview>
      </TouchableOpacity>
    </SkeletonContent>
  );
};

export default RestaurantItem;
