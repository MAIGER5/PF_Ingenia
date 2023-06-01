import axios from "axios";
export const GET_INSTRUCTOR_USER = "GET_INSTRUCTOR_USER";
import env from "../../../env";

export const getInstructorUser = () => {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/instructor`);
    dispatch({ type: GET_INSTRUCTOR_USER, payload: response.data });
  };
};
