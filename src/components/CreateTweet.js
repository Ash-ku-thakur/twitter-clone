import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
const CreateTweet = () => {
  return (
    <div>
      {/*  for you felds */}
      <div className="flex justify-around font-semibold text-xl shadow-lg cursor-pointer  ">
        <div className="hover:bg-gray-200 w-full text-center py-2">
          <h2>For You</h2>
        </div>
        <div className="hover:bg-gray-200 w-full text-center py-2">
          <h2>Following</h2>
        </div>
      </div>

      {/* avatar input text field  */}
      <div className=" flex items-center gap-4 py-3">
        <div className="py-2">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1803660028882329600/DOQCUj_5_400x400.jpg"
            size="50"
            round={true}
          />
        </div>
        <div className=" w-full">
          <input
            className="outline-none w-full py-2 font-semibold px-3"
            type="text"
            placeholder="what is happening today?"
          />
        </div>
      </div>

      {/*Post button and icons  */}
      <div className=" flex justify-between items-center my-5">
        <div>
          <CiImageOn size={"2rem"} />
        </div>
        <div>
          <button className="bg-[#1D9BF0] text-lg px-4 py-2 border-none rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
