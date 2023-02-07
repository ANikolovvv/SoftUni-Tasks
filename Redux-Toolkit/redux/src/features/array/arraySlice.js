import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  names: [{ name: "West" }, { name: "Asest" }],
  isLoading: true,
  counter: 0,
  total: 0,
};
const arraySlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    clearArray: (state) => {
      state.names = [];
    },
  },
});
console.log(arraySlice);
export const {clearArray}=arraySlice.actions
export default arraySlice.reducer;
