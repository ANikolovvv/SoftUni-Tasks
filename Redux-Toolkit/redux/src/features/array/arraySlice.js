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
    removeName: (state, action) => {
      const name = action.payload;
      state.names = state.names.filter((x) => x.name !== name);
      console.log(name, "remove");
    },
    addName: (state, action) => {
      const name = action.payload;
      // let newName = state.names.slice();
      // newName.push(name);
      // state.names = newName;
      state.names.push(action.payload);
    },
    updateName: (state, action) => {
      const c = action.payload;

      state.names = state.names.filter((x) => x.name !== c.name);
      state.names.push({ name: c.value });
      //let newName = state.names.slice(0);
      // let index=newName.indexOf(name);

      // newName.push(name);
      //state.names = newName;
    },
  },
});
console.log(arraySlice);
export const { clearArray, removeName, addName, updateName } =
  arraySlice.actions;
export default arraySlice.reducer;
