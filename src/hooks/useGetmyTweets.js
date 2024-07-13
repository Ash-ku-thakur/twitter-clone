import axios from "axios";
import { TWEETS_END_POINT_API } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFollowingTweets,
  getMyTweets,
  
} from "../redux/tweetSlicer";

let useGetmyTweets = (id) => {
  let { isActive, refresh } = useSelector((state) => state?.tweet);

  useEffect(() => {
    if (isActive) {
      fetchMyTweets();
    } else {
      followingTweetHandler();
    }
  }, [isActive, refresh]);

  let dispatch = useDispatch();

  let fetchMyTweets = async () => {
    try {
      let response = await axios.get(
        `${TWEETS_END_POINT_API}/getTweets/${id}`
        //  {withCredentials:true}
      );
      dispatch(getMyTweets(response?.data?.tweets));
    } catch (error) {
      console.log(error);
    }
  };

  let followingTweetHandler = async () => {
    try {
      let response = await axios.get(
        `${TWEETS_END_POINT_API}/followingTweets/${id}`
      );
      console.log(response?.data?.tweets);
      dispatch(getFollowingTweets(response?.data?.tweets));
      // dispatch(getRefresh());
    } catch (error) {
      console.log(error);
    }
  };
};
export default useGetmyTweets;
