import axios from 'axios';

export const GET_COURSES = 'GET_COURSES';

const URLcourse = 'http://localhost:3001/courses'

export function getCourses() {
  return async function(dispatch) {
    const response = await axios.get(`${URLcourse}/`);
    dispatch({type: GET_COURSES, payload: response.data})
  }
};