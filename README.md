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
