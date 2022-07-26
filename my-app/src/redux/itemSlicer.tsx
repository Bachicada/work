import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  currencySymbol: null | string;
  currencyLabel: null | string;
}
const initialState: initialStateType = {
  currencySymbol: null,
  currencyLabel: null,
};

export const curSlice = createSlice({
  name: "curSettings",
  initialState,
  reducers: {
    setStandartCurrency(state, action) {
      state.currencySymbol = action.payload;
    },
    checkCurrencyLabel(state, action) {
      state.currencyLabel = action.payload;
    },
    checkCurrencySymbol(state, action) {
      state.currencySymbol = action.payload;
    },
  },
});
export const { checkCurrencyLabel, checkCurrencySymbol, setStandartCurrency } =
  curSlice.actions;

export default curSlice.reducer;
