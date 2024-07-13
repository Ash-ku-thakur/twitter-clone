import { useSelector } from "react-redux";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

const Feed = () => {
  let { tweets, isActive, followingTweets } = useSelector(
    (state) => state?.tweet
  );

  return (
    <div className="border-black border-[1px] w-[56%] mx-8">
      <div className="m-4">
        <CreateTweet />

        {!isActive
          ? followingTweets?.map((userTweets) =>
              userTweets?.map((nestedTweets) => (
                <Tweet key={nestedTweets?._id} tweet={nestedTweets} />
              ))
            )
          : tweets?.map((userTweets) => (
              <Tweet key={userTweets?._id} tweet={userTweets} />
            ))}
      </div>
    </div>
  );
};

export default Feed;
