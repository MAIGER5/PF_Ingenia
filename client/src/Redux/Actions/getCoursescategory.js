import axios from 'axios';

export const GET_COURSESCATEGORY = 'GET_COURSESCATEGORY';

const URLcourse = 'http://localhost:3001/courses'

export function getCoursesCategory() {
  return async function(dispatch) {
    const response = await axios.get(`${URLcourse}/`);
    dispatch({type:GET_COURSESCATEGORY, payload: response.data})
  }
};