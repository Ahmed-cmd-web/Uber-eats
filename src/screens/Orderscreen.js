/** @format */

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import db from "../backend/firebase";
import Appview from "../components/Appsafeareaview";
import Apptext from "../components/Apptext";
import Orderslistitem from "../components/Orders/Orderslistitem";

const Orderscreen = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const get = async () => {
      db.collection(`orders/${user.number}/orders`).onSnapshot(
        (querySnapshot) => {
          setOrders(querySnapshot.forEach((i) => [i.data()]));
        }
      );
    };
    get();
    console.log(orders);
  }, []);
  return (
    <Appview style={`flex-1 items-center `}>
      <Apptext style={`text-3xl font-bold `}>Your Orders</Apptext>
      {orders.map((e, i) => (
        <Orderslistitem {...e} key={i} />
      ))}
    </Appview>
  );
};

export default Orderscreen;
