import { configureStore } from "@reduxjs/toolkit";
import DateSlice from "./Slices/DateSlice";

const store = configureStore({
  reducer: {
    data: DateSlice,
  },
});

export default store;
