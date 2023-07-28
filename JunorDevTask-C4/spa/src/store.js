import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./slice/dataSlice";

 const store = configureStore({
  reducer: {
    goods: stockReducer,
  },
});
export default store
