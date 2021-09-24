/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    number: null,
  },
  cart: [],
};
// export const TOTAL = (array) => array.reduce((a, b) => a + b, 0);
export const TOTAL = (array) =>
  array.reduce((a, b) => a + parseFloat(b.price), 0).toFixed(2);
const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.user.name = action.payload.name;
      state.user.number = action.payload.number;
      return state;
    },
    ADD_TO_CART: (state, action) => {
      state.cart.push(action.payload);
      return state;
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter((i) => i.uri !== action.payload);
    },
    LOG_OUT: (state) => {
      state.user = {
        name: null,
        number: null,
      };
      state.cart = [];
      return state;
    },
  },
});

export const { SET_USER, ADD_TO_CART, REMOVE_FROM_CART, LOG_OUT } =
  reducer.actions;

export const info = (state) => state;

export default reducer.reducer;
