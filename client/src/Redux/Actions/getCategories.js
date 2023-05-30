import axios from "axios";
export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories() {
  return async function(dispatch) {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/category/`);
    dispatch({type: GET_CATEGORIES, payload: response.data})
  }
}