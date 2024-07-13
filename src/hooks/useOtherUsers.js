import axios from "axios";
import {  USER_END_POINT_API } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { otherUsers } from "../redux/userSlice";

let useOtherUsers = (id) => {
  useEffect(() => {
    fetchOtherUsers();
  }, []);
  let dispatch = useDispatch();

  let fetchOtherUsers = async () => {
    try {
      let response = await axios.get(`${USER_END_POINT_API}/otheruser/${id}`,
        //  {withCredentials:true}
        );
      dispatch(otherUsers(response?.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export default useOtherUsers;
