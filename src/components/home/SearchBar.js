/** @format */

import React from "react";
import {
  View,
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
// import { installWebGeolocationPolyfill } from "expo-location";

const SearchBar = ({ setcountry }) => {
  const mode = useColorScheme();
  // installWebGeolocationPolyfill()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw` flex-row items-center m-2   `}>
        <GooglePlacesAutocomplete
          // currentLocation={true}
          onPress={(e) => setcountry(e.structured_formatting.main_text)}
          query={{
            key: "AIzaSyCGNJGBJOecbrUdm-KAla_o6LAhPuBUDq8",
            components: "country:us",
          }}
          textInputProps={{
            returnKeyType: "search",
            returnKeyLabel: "search",
          }}
          placeholder="Search"
          styles={{
            textInputContainer: {
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 99,
              padding: 5,
              backgroundColor: "#eee",
            },

            textInput: {
              backgroundColor: "#eee",
              fontWeight: "500",
              borderRadius: 99,
            },
            poweredContainer: {
              backgroundColor:
                mode === "dark"
                  ? colors.darkmodebackground
                  : colors.lightmodebackground,
            },
            row: {
              backgroundColor:
                mode === "dark"
                  ? colors.darkmodebackground
                  : colors.lightmodebackground,
            },
            description: {
              color: mode === "dark" ? colors.lightmodebackground : "black",
            },
          }}
          renderLeftButton={() => <Ionicons name="location-sharp" size={25} />}
          renderRightButton={() => (
            <Appview
              style={`rounded-full border-0 flex-row p-3 items-center w-1/4 justify-around `}
            >
              <AntDesign
                name="clockcircle"
                size={15}
                color={mode === "dark" ? colors.lightmodebackground : "black"}
              />
              <Apptext>Search</Apptext>
            </Appview>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
