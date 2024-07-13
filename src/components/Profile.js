import React from "react";
import Avatar from "react-avatar";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../hooks/useGetProfile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_END_POINT_API } from "../utils/constant";
import toast from "react-hot-toast";
import { followingUpdate } from "../redux/userSlice";
import { getRefresh } from "../redux/tweetSlicer";
// import { useSelector } from "react-redux";

const Profile = () => {
  let { profile, user } = useSelector((state) => state?.user);
  let dispatch = useDispatch();

  // dynamic Id use so that we can go into other's profile
  let { id } = useParams();
  useGetProfile(id);

  let followAndUnfollowHandler = async () => {
    try {
      // who to followId is parama // body me loggedinUserId
      if (user?.following?.includes(profile?._id)) {
        let response = await axios.put(`${USER_END_POINT_API}/unfollow/${id}`, {
          id: user?._id,
        });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());
        if (response?.data?.success) {
          toast?.success(response?.data?.massage);
        }
      } else {
        let response = await axios.put(`${USER_END_POINT_API}/follow/${id}`, {
          id: user?._id,
        });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());

        if (response?.data?.success) {
          toast?.success(response?.data?.massage);
        }
      }
    } catch (error) {
      toast?.error(error?.response?.data?.massage);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="border-l-2 border-r-2 border-black">
        {/* back-icon, name,userName */}
        <div className="flex items-center gap-7 py-2">
          <Link to="/" className="hover:bg-gray-400 rounded-full p-2">
            <IoArrowBackSharp size={"1.5rem"} />
          </Link>
          <div>
            <h2 className="font-semibold text-xl">{profile?.name}</h2>
            <h2 className="text-gray-500">{profile?.userName}</h2>
          </div>
        </div>
        {/* profile image, button edit avatar */}
        <div className="relative  z-[999999]">
          <img
            alt="profileImage"
            src="https://pbs.twimg.com/profile_banners/35415477/1697745273/600x200"
            className="border-black border-[1px]"
          />

          {/* avatar, name,userName, descripton */}

          <div className="absolute -bottom-40 left-5 ">
            <div className="">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1803660028882329600/DOQCUj_5_400x400.jpg"
                size={"8rem"}
                round={true}
              />
            </div>
            <div className="my-3">
              <h2>{profile?.name}</h2>
              <h2>{profile?.userName}</h2>
            </div>
            <div>
              <h2>
                Sharing what works in education. 💡 Edutopia is an initiative of
                the George Lucas Educational Foundation.
              </h2>
            </div>
          </div>

          <div>
            {profile?._id === user?._id ? (
              <div className="relative float-right border-black border-[1px] rounded-full px-4 py-2 m-3 cursor-pointer">
                <button className="">Edit profile</button>
              </div>
            ) : (
              <div className="relative float-right border-black border-[1px] bg-black text-white rounded-full px-4 py-2 m-3 cursor-pointer">
                <button onClick={followAndUnfollowHandler}>
                  {user?.following?.includes(id) ? "unFollow" : "Follow"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
