/** @format */

import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Appview from "../components/Appview";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItem from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import colors from "../content/colors";
import backendfuncs from "../backend/backendfuncs";
import Secretkeys from "../content/Secretkeys";
const Home = () => {
  const { url, Apikey } = Secretkeys;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(5);
  const [activetab, setActivetab] = useState("Delivery");
  useEffect(() => {
    const data = async () => {
      setLoading(true);
      try {
        const r = await backendfuncs.GET_DATA(url, Apikey, size);
        if (!r.data) return setLoading(false);
        setData(
          r?.data.businesses.filter((i) =>
            i.transactions.includes(activetab.toLowerCase())
          )
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    data();
  }, [size, activetab]);

  return (
    <SafeAreaView style={tw`bg-${colors.grey} flex-1 items-center  `}>
      <Appview style={`w-full items-center flex-1 justify-around `}>
        <HeaderTabs active={activetab} setactive={setActivetab} />
        <SearchBar />
      </Appview>
      <Categories />
      <View style={tw`h-4/6`}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          onEndReached={() => setSize(size + 5)}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <RestaurantItem {...item} loading={loading} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
