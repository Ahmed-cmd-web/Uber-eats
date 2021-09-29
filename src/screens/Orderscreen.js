/** @format */

import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import backendfuncs from "../backend/backendfuncs";
import Appview from "../components/Appsafeareaview";
import Apptext from "../components/Apptext";
import Orderslistitem from "../components/Orders/Orderslistitem";

const Orderscreen = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    backendfuncs.GET_ORDERS(user.number, setOrders);
  }, []);
  const finalorders = useCallback(
    (e, i) => <Orderslistitem {...e} key={i} />,
    [orders]
  );
  return (
    <Appview style={`flex-1 items-center  `}>
      <Apptext style={`text-3xl font-bold p-2`}>Your Orders</Apptext>
      <ScrollView>{orders.map(finalorders)}</ScrollView>
    </Appview>
  );
};

export default Orderscreen;
