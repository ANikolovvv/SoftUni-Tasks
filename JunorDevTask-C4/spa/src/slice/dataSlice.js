import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    getStock: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { getStock } = stockSlice.actions;
export default stockSlice.reducer;
