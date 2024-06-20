import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
const Tweet = () => {
  return (
    <div className="w-full border border-b-2 py-4">
      <div className="flex items-center gap-4 w-full">
        {/* avatar */}
        <div>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1803660028882329600/DOQCUj_5_400x400.jpg"
            size="50"
            round={true}
          />
        </div>

        {/* name , userName , Posts and like comment and bookmark  */}
        <div className="w-full">
          <div className="flex items-center gap-2">
            <h2 className="font-bold">Ashish</h2>
            <h2 className="text-gray-500">@Ashish-Tha . 1min</h2>
          </div>
          <div>
            <h2>Hello Developers lets connect and grow together</h2>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex gap-1 items-center ">
              <div className="hover:bg-green-300 rounded-full cursor-pointer p-2">
                <FaRegComment size={"1.5rem"} />
              </div>
              <h2>0</h2>
            </div>
            <div className="flex gap-1 items-center">
              <div className="hover:bg-pink-300 rounded-full cursor-pointer p-2">
                <AiOutlineLike size={"1.5rem"} />
              </div>
              <h2>0</h2>
            </div>
            <div className="flex gap-1 items-center">
              <div className="hover:bg-yellow-300 rounded-full cursor-pointer p-2">
                <CiBookmark size={"1.5rem"} />
              </div>
              <h2>0</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
