import axios from "axios";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TWEETS_END_POINT_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/tweetSlicer";

const Tweet = ({ tweet }) => {
  let { user } = useSelector((state) => state?.user);
  let dispatch = useDispatch();

  let likeOrDislikeHandler = async (tweetId) => {
    try {
      let response = await axios.put(
        `${TWEETS_END_POINT_API}/like/${tweetId}`,
        { id: user?._id }
        // {withCredentials:true}
      );

      dispatch(getRefresh());
      if (response?.data?.massage) {
        toast.success(response?.data?.massage);
      }
    } catch (error) {
      toast.error(error?.response?.data?.massage);

      console.log(error);
    }
  };

  // delete tweet
  let deleteHandle = async (tweetId) => {
    try {
      let response = await axios.delete(
        `${TWEETS_END_POINT_API}/delete/${tweetId}`
      );
      dispatch(getRefresh());
      if (response?.data?.massage) {
        toast.success(response?.data?.massage);
      }
    } catch (error) {
      toast.error(error?.response?.data?.massage);

      console.log(error);
    }
  };

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
            <h2 className="font-bold">{tweet?.userDetails[0]?.name}</h2>
            <h2 className="text-gray-500">{`${tweet?.userDetails[0]?.userName} .1min`}</h2>
          </div>
          <div>
            <h2>{tweet?.description}</h2>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex gap-1 items-center ">
              <div className="hover:bg-green-300 rounded-full cursor-pointer p-2">
                <FaRegComment size={"1.5rem"} />
              </div>
              <h2>0</h2>
            </div>
            <div className="flex gap-1 items-center">
              <div
                onClick={() => likeOrDislikeHandler(tweet?._id)}
                className="hover:bg-pink-300 rounded-full cursor-pointer p-2"
              >
                <AiOutlineLike size={"1.5rem"} />
              </div>
              <h2>{tweet?.like?.length}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <div className="hover:bg-yellow-300 rounded-full cursor-pointer p-2">
                <CiBookmark size={"1.5rem"} />
              </div>
              <h2>0</h2>
            </div>

            {/* user hi apni tweet ko curd ker sakta hai dusre ke nahi */}
            {user?._id== tweet?.userId && (
              <div className="flex gap-1 items-center">
                <div
                  onClick={() => deleteHandle(tweet?._id)}
                  className="hover:bg-red-500 rounded-full cursor-pointer p-2"
                >
                  <MdDeleteOutline size={"1.5rem"} />
                </div>
                <h2>0</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
