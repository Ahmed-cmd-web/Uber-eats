/** @format */

import React from "react";
import Appview from "../Appview";
import categoriescontent from "../../content/categoriescontent";
import { FlatList, Image, ScrollView, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Apptext from "../Apptext";
const Categories = () => {
  return (
    <Appview style={`flex-row w-full  my-2 justify-evenly `}>
      {
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categoriescontent}
          keyExtractor={(i, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={index} style={tw`p-2 items-center mx-2 `}>
              <Image
                source={item.img}
                style={{ width: 50, height: 40, resizeMode: "contain" }}
              />
              <Apptext style={`font-bold`}>{item.title}</Apptext>
            </View>
          )}
        />
      }
    </Appview>
  );
};

export default Categories;
