import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./features/array/arraySlice";
import modalReducer from "./features/modal/modalSlice";
import swapiReducer from "./features/swapi/swapiSlice";
export const store = configureStore({
  reducer: {
    arr: arrayReducer,
    modal: modalReducer,
    swapi: swapiReducer,
  },
});
