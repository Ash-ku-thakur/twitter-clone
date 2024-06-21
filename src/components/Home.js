import { Outlet } from "react-router-dom";
import Leftsidebar from "./Leftsidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
    <div className="w-[86%] mx-auto flex justify-between">
      <Leftsidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Home;
