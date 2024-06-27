import { Outlet } from "react-router-dom";
import Leftsidebar from "./Leftsidebar";
import RightSidebar from "./RightSidebar";
import useGetProfile from "../hooks/useGetProfile";

const Home = () => {

 let id = "667d272c44e45d126d72e4c4"
 let ch = useGetProfile(id)
 console.log(ch);

  return (
    <div className="w-[86%] mx-auto flex justify-between">
      <Leftsidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Home;
