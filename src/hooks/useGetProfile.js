import axios from "axios";
import { USER_PROFILE } from "../utils/constant";
import { useEffect, useState } from "react";

let useGetProfile = (id) => {
  let [userData, setUserData] = useState();
  useEffect(() => {
    fetchData();
  }, [id]);
  let fetchData = async () => {
    try {
      let response = await axios.get(`${USER_PROFILE}/${id}`);
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return userData;
};
export default useGetProfile;
