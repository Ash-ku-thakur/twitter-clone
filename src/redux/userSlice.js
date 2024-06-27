import { createSlice } from "@reduxjs/toolkit";

let userSlicer = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
  },
  reducers: {
    // actions
    getUser: (state, action) => {
      state.user = action.payload;
    },
    otherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
  },
});

export default userSlicer.reducer;
export let { getUser, otherUsers } = userSlicer.actions;
