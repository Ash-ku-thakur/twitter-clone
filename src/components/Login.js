import React, { useState } from "react";
import axios from "axios";
import { USER_END_POINT_API } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  let [isLogin, setIsLogin] = useState(false);
  let [name, setName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  // change state of isLogin
  let loginSignUpHandler = () => {
    setIsLogin(!isLogin);
  };

  // when i click on submit than new account create with (rht)
  let submitHandler = async (e) => {
    e.preventDefault();

    // login or signUp logic
    if (!isLogin) {
      // register
      try {
        let response = await axios.post(
          `${USER_END_POINT_API}/register`,
          {
            name,
            userName,
            email,
            password,
          }
          // { withCredentials: true }
        );
        // after register navigate ("/")
        if (response.data.success) {
          dispatch(getUser(response?.data?.user)); // after sucess we sent the user data to our store
          setIsLogin(true);
          navigate("/");
          toast.success(response.data.massage);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
        toast.error("err");
      }
    } else {
      //login
      try {
        let response = await axios.post(
          `${USER_END_POINT_API}/login`,
          {
            email,
            password,
          }
          // { withCredentials: true }
        );
        // after login navigate ("/")
        if (response.data.success) {
          dispatch(getUser(response?.data?.user));
          toast.success(response.data.massage);
          navigate("/");
        }
        // console.log(response);
      } catch (error) {
        toast.error("else err");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="flex items-center justify-around W-[80%]">
        {/* brand img */}
        <div>
          <img
            width={"290px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLYbX6ZW68YW1KVLv4vbVdtDkO_52rAWWa5pNcYSLpJmwLVRpWCsDVH2kQg&s"
            alt="logo"
            className="ml-2"
          />
        </div>
        {/* login form */}
        <div className="relative">
          <div className="my-3">
            <h1 className="font-extrabold text-7xl ">Explore Today</h1>
          </div>
          <h1 className="mt-4 mb-2 text-3xl font-bold">
            {isLogin ? "Sign Up" : "Login"}
          </h1>
          {/* login & sign up fields */}
          <form className="flex flex-col w-[55%]" onSubmit={submitHandler}>
            {!isLogin && (
              // name and userName fields
              <div>
                <input
                  className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
                  type="userName"
                  placeholder="userName"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
            )}
            {/* email, password fields */}
            <input
              className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button className="bg-[#1D9BF0] py-2 px-3 text-white rounded-full outline-none text-xl font-bold hover:scale-95">
              {isLogin ? "Create account" : "login"}{" "}
            </button>
            <h2 className="cursor-pointer">
              {isLogin ? "You have an Account?" : "Already have an account?"}
              <span className="text-blue-500" onClick={loginSignUpHandler}>
                {isLogin ? "Login" : "sign up"}
              </span>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
