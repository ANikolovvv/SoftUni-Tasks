import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://swapi.dev/api/people/1";
const initialState = {
  star: [],
  isLoading: false,
};
 export const getSwapi = createAsyncThunk("swapi/getSwapi", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  extraReducers: {
    [getSwapi.pending]: (state) => {
      state.isLoading = true;
    },
    [getSwapi.fulfilled]: (state, action) => {
      //console.log(action, "action-swapi");
      state.isLoading = false;
      state.star = [action.payload];
    },
    [getSwapi.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

//export const {} = swapiSlice.actions;
export default swapiSlice.reducer;
