/** @format */

import React from "react";
import {
  View,
  Text,
  useColorScheme,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Apptext from "../Apptext";
import Appview from "../Appview";
import colors from "../../content/colors";

const SearchBar = () => {
  const mode =
    useColorScheme() === "dark"
      ? colors.lightmodebackground
      : "rgba(31, 41, 55, 1)";
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}

    >
      <View style={tw` flex-row items-center mx-2  `}>
        <GooglePlacesAutocomplete
          query={{ key: "AIzaSyDVBle2X83bXGti_8CuqcPw26jgojFN7WQ" }}
          placeholder="Search"
          styles={{
            textInputContainer: {
              borderRadius: 99,
              alignItems: "center",
              padding: 5,
            },

            textInput: {
              backgroundColor: "#eee",
              fontWeight: "700",
            },
            container: {
              borderWidth: 0,
              borderRadius: 99,
              overflow: "hidden",
              backgroundColor: "#eee",
            },
          }}
          renderLeftButton={() => <Ionicons name="location-sharp" size={25} />}
          renderRightButton={() => (
            <Appview
              style={`rounded-full border-0 flex-row p-3 items-center w-1/4 justify-around `}
            >
              <AntDesign name="clockcircle" size={15} color={mode} />
              <Apptext>Search</Apptext>
            </Appview>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
