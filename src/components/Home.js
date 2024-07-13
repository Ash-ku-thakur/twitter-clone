import { Outlet, useNavigate } from "react-router-dom";
import Leftsidebar from "./Leftsidebar";
import RightSidebar from "./RightSidebar";
import useOtherUsers from "../hooks/useOtherUsers";
import { useSelector } from "react-redux";
import useGetmyTweets from "../hooks/useGetmyTweets";
import { useEffect } from "react";

const Home = () => {
  //  here is showing home (/)
  let { user, otherUsers } = useSelector((state) => state?.user);
  let navigate = useNavigate();

  useOtherUsers(user?._id); // call other users
  useGetmyTweets(user?._id); // call my tweets

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-[86%] mx-auto flex justify-between">
      <Leftsidebar />
      <Outlet />
      <RightSidebar otherUsers={otherUsers?.otherUser} />
    </div>
  );
};

export default Home;
