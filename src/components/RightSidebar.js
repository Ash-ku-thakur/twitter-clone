import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const RightSidebar = ({ otherUsers }) => {
  return (
    <div className="w-[30%]">
      {/* Search */}
      <div className="flex items-center p-2 bg-gray-200 rounded-full w-full">
        <CiSearch size="1.5rem" />
        <input
          type="text"
          placeholder="Search"
          className=" bg-transparent  outline-none  px-2"
        />
      </div>
      {/* who to follow */}
      <div className="border-black border-2 p-3 rounded-2xl my-5">
        <h1 className="font-extrabold text-xl mb-5">Who To follow</h1>

        {otherUsers?.map((users) => (
          <div key={users?._id} className="flex items-center justify-between my-5">
            {/* avatar user, userNamem*/}
            <div className="flex items-center gap-2">
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1803660028882329600/DOQCUj_5_400x400.jpg"
                  size="50"
                  round={true}
                />
              </div>
              <div>
                <h2>{users?.name}</h2>
                <h2 className="text-gray-500">{users?.userName}</h2>
              </div>
            </div>
            {/*  follow  */}
            <Link to={`/profile/${users?._id}`}>
              <button className="px-3  py-2 rounded-full bg-black text-white text-center">
                Follow
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
