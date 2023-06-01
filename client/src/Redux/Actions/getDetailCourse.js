import axios from "axios";
import env from "../../../env";

export const GET_DATAIL_COURSE = "GET_DATAIL_COURSE";

export const getDetailCourse = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/courses/${id}`);
    dispatch({ type: GET_DATAIL_COURSE, payload: response.data });
  };
};
