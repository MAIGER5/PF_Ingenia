import axios from 'axios';

export const GET_COURSES = 'GET_COURSES';


export function getCourses() {
  return async function(dispatch) {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/courses/`);
    dispatch({type: GET_COURSES, payload: response.data})
  }
};