import Feed from "./Feed";
import Leftsidebar from "./Leftsidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
    <div className="w-[86%] mx-auto flex justify-between">
      <Leftsidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
};

export default Home;
