import { createSlice } from "@reduxjs/toolkit";
import { ItemCartInfoType } from "../utils/types";

export type cartActionType = {
  type: string;
  payload: ItemCartInfoType;
};

const initialState: { cart: Array<ItemCartInfoType> } = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemToCart(state, action: cartActionType) {
      state.cart.push(action.payload);
    },
  },
});
export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
