import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

let store = configureStore({
  reducer: {
    // actions
    user:userSlice
  },
});

export default store