import { createSlice } from "@reduxjs/toolkit";

let userSlicer = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
    profile: null,
  },
  reducers: {
    // actions
    getUser: (state, action) => {
      state.user = action.payload;
    },
    otherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    getProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export default userSlicer.reducer;
export let { getUser, otherUsers, getProfile } = userSlicer.actions;
