import axios from "axios";
import { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { TWEETS_END_POINT_API } from "../utils/constant";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getIsActive, getRefresh } from "../redux/tweetSlicer";

const CreateTweet = () => {
  let [description, setDescription] = useState("");
  let { user } = useSelector((state) => state?.user);
  let { isActive } = useSelector((state) => state?.tweet);
  // console.log(isActive);
  let dispatch = useDispatch();

  let submitHandler = async () => {
    try {
      let response = await axios.post(`${TWEETS_END_POINT_API}/create`, {
        description,
        id: user?._id,
      });
      dispatch(getRefresh());
      console.log(user?._id);

      if (response?.data?.massage) {
        toast.success(response?.data?.massage);
      }
      setDescription("");
    } catch (error) {
      toast.error(error?.response?.data?.massage);

      console.log(error);
    }
  };

  let forYouHandler = () => {
    dispatch(getIsActive(true));
    console.log(isActive);
  };
  let followingHandler = () => {
    dispatch(getIsActive(false));
    // console.log(isActive);
  };
  return (
    <div>
      {/*  for you felds */}
      <div className="flex justify-around font-semibold text-xl cursor-pointer  ">
        <div
          onClick={forYouHandler}
          className={`${
            isActive
              ? "border-b-4 border-blue-900"
              : "border-b-4 border-transparent"
          }hover:bg-gray-200 w-full text-center py-2`}
        >
          <h2>For You</h2>
        </div>
        <div
          onClick={followingHandler}
          className={`${
            !isActive
              ? "border-b-4 border-blue-900"
              : "border-b-4 border-transparent"
          }}hover:bg-gray-200 w-full  text-center py-2`}
        >
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
            value={description}
            onChange={(e) => setDescription(e?.target?.value)}
          />
        </div>
      </div>

      {/*Post button and icons  */}
      <div className=" flex justify-between items-center my-5">
        <div>
          <CiImageOn size={"2rem"} />
        </div>
        <div>
          <button
            onClick={submitHandler}
            className="bg-[#1D9BF0] text-lg px-4 py-2 border-none rounded-full"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
