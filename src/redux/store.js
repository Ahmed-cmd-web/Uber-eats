/** @format */

import { createStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  Blacklist: ["cart"],
};

const persistedreudcer = persistReducer(persistConfig, reducer);
const store = createStore(persistedreudcer);
export const persistedstore = persistStore(store);

export default store;
