import axios from "axios";
import { USER_PROFILE } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/userSlice";

let useGetProfile = (id) => {
  useEffect(() => {
    fetchData();
  }, [id]);
  let dispatch = useDispatch();

  let fetchData = async () => {
    try {
      let response = await axios.get(
        `${USER_PROFILE}/profile/${id}`
      );
      dispatch(getProfile(response?.data?.user));
      //   setUserData(response?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };
};
export default useGetProfile;
