import axios from "axios";
import env from "../../../env";

export const GET_COURSESEACH = "GET_COURSESEACH";

export function getCoursesSearch(course) {
  return async function (dispatch) {
    const response = await axios.get(
      `${env.VITE_HOST}/courses?title=${course}`
    );
    dispatch({ type: GET_COURSESEACH, payload: response.data });
  };
}
