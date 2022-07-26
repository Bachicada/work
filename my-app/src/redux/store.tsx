import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { curSlice } from "./itemSlicer";

export const store = configureStore({
  reducer: curSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
