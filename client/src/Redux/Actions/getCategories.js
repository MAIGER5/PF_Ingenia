import axios from "axios";
export const GET_CATEGORIES = 'GET_CATEGORIES';

const URLcourse = 'http://localhost:3001/category'

export function getCategories() {
  return async function(dispatch) {
    const response = await axios.get(`${URLcourse}/`);
    dispatch({type: GET_CATEGORIES, payload: response.data})
  }
};