import { configureStore } from "@reduxjs/toolkit";

import AboutSlice from "./Slice/AboutSlice";

const store = configureStore({
  reducer: {
    aboutInfo: AboutSlice,
  },
});
export default store;
