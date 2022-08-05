import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ItemCartInfoType } from "../utils/types";
import { cartSlice } from "./cartSlicer";
import { curSlice } from "./currencySlicer";

export type AppStateType = {
  currency: {
    currencyLabel: string;
    currencySymbol: string;
  };
  cart: Array<ItemCartInfoType> | [];
};

export const store = configureStore({
  reducer: combineReducers({
    currency: curSlice.reducer,
    cart: cartSlice.reducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
