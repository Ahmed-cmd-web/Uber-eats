/** @format */

import React from "react";
import { Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Apptext from "../Apptext";
import Appview from "../Appview";

const About = ({
  name,
  image_url,
  rating,
  price,
  categories,
  review_count,
}) => {
  return (
    <Appview style={`w-full`}>
      <Image
        defaultSource={require("../../assets/images/bg1.jpg")}
        source={{ uri: image_url }}
        style={tw`w-full h-60`}
      />
      <View style={tw`p-4`}>
        <Apptext style={`font-normal text-xl`}>{name}</Apptext>
        <View style={tw`py-2 flex-row items-center`}>
          {categories.map((e, i) => (
            <Apptext key={i}>{e.title}⋅</Apptext>
          ))}
          <Apptext>{price}⋅</Apptext>
          <Apptext>{rating}⭐️</Apptext>
          <Apptext>({review_count}+)</Apptext>
        </View>
      </View>
    </Appview>
  );
};

export default About;
