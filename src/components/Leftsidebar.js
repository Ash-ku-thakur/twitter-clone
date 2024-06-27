import { IoHome } from "react-icons/io5";
import { SiAzuredataexplorer } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Leftsidebar = () => {
  let { user, profile } = useSelector((state) => state?.user);

  return (
    <div className="border-black border-[1px] w-[20%]">
      <div>
        {/* logo */}
        <div>
          <img
            width={"50px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLYbX6ZW68YW1KVLv4vbVdtDkO_52rAWWa5pNcYSLpJmwLVRpWCsDVH2kQg&s"
            alt="logo"
            className="ml-2"
          />
        </div>

        {/* sections */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-4 my-5 hover:cursor-pointer hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <IoHome size={"2rem"} />
            <h2 className="font-extrabold text-xl">Home</h2>
          </Link>
          <div className="flex items-center gap-4 my-5 hover:cursor-pointer hover:bg-gray-200 rounded-full px-4 py-2">
            <SiAzuredataexplorer size={"2rem"} />
            <h2 className="font-extrabold text-xl">Explore</h2>
          </div>
          <div className="flex items-center gap-4 my-5 hover:cursor-pointer hover:bg-gray-200 rounded-full px-4 py-2">
            <IoIosNotifications size={"2rem"} />
            <h2 className="font-extrabold text-xl">Notifications</h2>
          </div>
          <Link
            to={`/profile/${user?._id}`}
            className="flex items-center gap-4 my-5 hover:cursor-pointer hover:bg-gray-200 rounded-full px-4 py-2"
          >
            <CgProfile size={"2rem"} />
            <h2 className="font-extrabold text-xl">Profile</h2>
          </Link>
          <div className="flex items-center gap-4 my-5 hover:cursor-pointer hover:bg-gray-200 rounded-full px-4 py-2">
            <FaRegBookmark size={"2rem"} />
            <h2 className="font-extrabold text-xl">Bookmarks</h2>
          </div>
          <div className="flex items-center gap-4 my-5 hover:cursor-pointer hover:bg-gray-200 rounded-full px-4 py-2">
            <AiOutlineLogout size={"2rem"} />
            <h2 className="font-extrabold text-xl">Logout</h2>
          </div>

          <button className="outline-none px-5 py-2 w-full bg-[#1D9BF0] rounded-full text-xl text-white font-extrabold hover:scale-95 transition-all">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
