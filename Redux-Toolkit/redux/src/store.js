import { configureStore } from '@reduxjs/toolkit'
import arrayReducer from "./features/array/arraySlice"
export const store = configureStore({
  reducer: {
    arr:arrayReducer
  },
})