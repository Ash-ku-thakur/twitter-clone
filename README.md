npx create-react-app twitterclone (building the react app setup)

npm install -D tailwindcss
npx tailwindcss init (building the css setup with tailwindCss)

make a components folder in the src folder

Home components takes three components
LeftSidebar , Feed , RightSidebar (According to Main twitter Webside)

<!-- =========== -->

# React-Icons

npm i react-icons (for icons)

npm i react-avatar (for avatars)

CreateTweet component in Feed

Tweets component in Feed

Search and Who to Follow create in RightSidebar

<!-- ===== -->

# React-Router-Dom

npm i react-router-dom (for client side routing)

router setup is working in Body component

user profile component is completed

login & sign up form complete

# install axios

npm i axios (for fetch networks)

# when i click on submit than new account create

axios.post(`${USER_REGISTER}/register`, {name, email, userName, password})
axios.post(`${USER_REGISTER}/reloginister`, { userName, password})

# React-Hot-Toast

npm i react-hot-toast (for beautiful massage)

# npm i @reactjs/toolkit react-redux

for handeling states

# store
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

let store = configureStore({
  reducer: {
    // actions
    user:userSlice
  },
});

export default store

# createSlicers 

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

# Provider store ={store}
in a parent component to use redux power 

# create some costome 
useGetProfile()

