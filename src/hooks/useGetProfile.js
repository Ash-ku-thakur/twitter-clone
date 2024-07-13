import axios from "axios";
import { USER_END_POINT_API } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/userSlice";

let useGetProfile = (id) => {
  useEffect(() => {
    fetchMyProfile();
  }, [id]);
  let dispatch = useDispatch();

  let fetchMyProfile = async () => {
    try {
      let response = await axios.get(
        `${USER_END_POINT_API}/profile/${id}`, 
        // { withCredentials:true}
      );
      // console.log(response);
      dispatch(getProfile(response?.data?.user));
    } catch (error) {
      console.log(error);
    }
  };
};
export default useGetProfile;
