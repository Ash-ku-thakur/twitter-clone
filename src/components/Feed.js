import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="border-black border-[1px] w-[56%] mx-8">
      <div className="m-4">
        <CreateTweet />
        <Tweet/>
      </div>
    </div>
  );
};

export default Feed;
