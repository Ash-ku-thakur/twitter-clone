import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Feed from "./Feed";

const Body = () => {
  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children:[
        {
          path:"/",
          element:<Feed/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
