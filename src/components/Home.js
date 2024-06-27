import { Outlet } from "react-router-dom";
import Leftsidebar from "./Leftsidebar";
import RightSidebar from "./RightSidebar";
import useOtherUsers from "../hooks/useOtherUsers";
import { useSelector } from "react-redux";

const Home = () => {
  // here is sowing rigthSideBar
  let { user, otherUsers } = useSelector((state) => state?.user);
  useOtherUsers(user?._id);

  return (
    <div className="w-[86%] mx-auto flex justify-between">
      <Leftsidebar />
      <Outlet />
      <RightSidebar otherUsers={otherUsers?.otherUser} />
    </div>
  );
};

export default Home;
