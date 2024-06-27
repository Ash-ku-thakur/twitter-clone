import axios from "axios";
import { OTHER_USERS } from "../utils/constant";
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
      let response = await axios.get(`${OTHER_USERS}/otheruser/${id}`);
      dispatch(otherUsers(response?.data));
      //   setUserData(response?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };
};
export default useOtherUsers;
