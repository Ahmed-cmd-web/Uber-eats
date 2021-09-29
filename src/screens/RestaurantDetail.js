/** @format */

import React, { useState } from "react";
import { ScrollView} from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import Appview from "../components/Appview";
import About from "../components/RestaurantDetail/About";
import Appmodal from "../components/RestaurantDetail/AppModal";
import MenuItem from "../components/RestaurantDetail/MenuItem";
import ViewCart from "../components/RestaurantDetail/ViewCart";
import detail from "../content/restaurantdetailcontent";
import { info, TOTAL } from "../redux/reducer";

const RestaurantDetail = ({ route }) => {
  const { cart } = useSelector(info);
  const total = TOTAL(cart);
  const [visible, setVisible] = useState(false);
  return (
    <Appview style={`flex-1 items-center `}>
      <About {...route.params} />
      <Divider style={tw`w-full`} />
      <ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
        {detail.map((e, i) => (
          <MenuItem key={i} {...e} />
        ))}
      </ScrollView>
      <Appmodal
        visible={visible}
        setVisible={setVisible}
        cartitems={cart}
        restaurantname={route.params.name}
      />

      <ViewCart
        length={cart.length}
        total={total}
        onPress={setVisible}
        title={"View Cart"}
        styles={`absolute bottom-5`}
      />
    </Appview>
  );
};

export default RestaurantDetail;

