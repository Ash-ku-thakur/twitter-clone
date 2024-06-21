import React, { useState } from "react";

const Login = () => {
  let [isLogin, setIsLogin] = useState(false);

  let loginSignUpHandler = () => {
    setIsLogin(!isLogin);
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
          <form className="flex flex-col w-[55%]">
            {isLogin && (
              // name and userName fields
              <div>
                <input
                  className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
                  type="userName"
                  placeholder="userName"
                />
              </div>
            )}
            {/* email, password fields */}
            <input
              className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
              type="email"
              placeholder="email"
            />
            <input
              className="outline-green-700 border border-gray-800 px-3 py-2 font-semibold rounded-full my-1"
              type="password"
              placeholder="pasword"
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
