import { createSlice } from "@reduxjs/toolkit";

let tweetSlicer = createSlice({
  name: "tweet",
  initialState: {
    tweets: null,
    refresh: false,
    isActive: true,
    followingTweets: null,
  },
  reducers: {
    // actions

    getMyTweets: (state, action) => {
      state.tweets = action.payload;
    },
    getRefresh: (state) => {
      state.refresh = !state?.refresh;
    },
    getIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    getFollowingTweets: (state, action) => {
      state.followingTweets = action.payload;
    },
  },
});

export default tweetSlicer.reducer;
export let { getMyTweets, getRefresh, getIsActive, getFollowingTweets } = tweetSlicer.actions;
