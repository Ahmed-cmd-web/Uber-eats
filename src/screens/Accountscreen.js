/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Appbutton from "../components/Appbutton";
import Apptext from "../components/Apptext";
import Appview from "../components/Appview";
import colors from "../content/colors";
import { LOG_OUT } from "../redux/reducer";

const Accountscreen = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Appview style={`flex-1 items-center justify-center p-5`}>
      <Apptext style={`text-4xl self-start font-medium`}>
        Welcome {user.name} !
      </Apptext>
      <Apptext style={`text-2xl self-start my-3`}>{user.number}</Apptext>
      <Appbutton
        placeholder={"Log-out"}
        bg={colors.green}
        onpress={() => dispatch(LOG_OUT())}
      />
    </Appview>
  );
};

export default Accountscreen;
