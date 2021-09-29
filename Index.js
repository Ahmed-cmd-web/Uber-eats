/** @format */

import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Appview from "./src/components/Appview";
import Apptabs from "./src/navigation/Apptabs";
import Welcomestack from "./src/navigation/Welcomestack";
import { info } from "./src/redux/reducer";

const Index = () => {
  const { user } = useSelector(info);
  const [User, setUser] = useState(user);
  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <Appview style={`flex-1 `}>
      <NavigationContainer>
        {User?.number ? <Apptabs /> : <Welcomestack />}
      </NavigationContainer>
    </Appview>
  );
};

export default Index;
