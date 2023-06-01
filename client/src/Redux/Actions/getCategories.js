import axios from "axios";
import env from "../../../env";
export const GET_CATEGORIES = "GET_CATEGORIES";

export function getCategories() {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/category/`);
    dispatch({ type: GET_CATEGORIES, payload: response.data });
  };
}
