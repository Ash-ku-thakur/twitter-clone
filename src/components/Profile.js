import React from "react";
import Avatar from "react-avatar";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="border-l-2 border-r-2 border-black">
        {/* back-icon, name,userName */}
        <div className="flex items-center gap-7 py-2">
          <Link to="/" className="hover:bg-gray-400 rounded-full p-2">
            <IoArrowBackSharp size={"1.5rem"} />
          </Link>
          <div>
            <h2 className="font-semibold text-xl">Ashish</h2>
            <h2 className="text-gray-500">@Ashish-tha</h2>
          </div>
        </div>
        {/* profile image, button edit avatar */}
        <div className="relative">
          <img
            alt="profileImage"
            src="https://pbs.twimg.com/profile_banners/35415477/1697745273/600x200"
            className="border-black border-[1px]"
          />
          <div className="relative float-right border-black border-[1px] rounded-full px-4 py-2 m-3 hover:bg-gray-400 cursor-pointer">
            <button className="">Edit profile</button>
          </div>

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
              <h2>Ashish</h2>
              <h2>@Ashish-tha</h2>
            </div>
            <div>
              <h2>
                Sharing what works in education. 💡 Edutopia is an initiative of
                the George Lucas Educational Foundation.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
