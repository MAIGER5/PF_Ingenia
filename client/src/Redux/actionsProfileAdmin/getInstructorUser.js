import axios from "axios";
export const GET_INSTRUCTOR_USER = 'GET_INSTRUCTOR_USER';

const URLinstructorUser = 'http://localhost:3001/instructor'

export const getInstructorUser = () => {
  return async function(dispatch) {
    const response = await axios.get(`${URLinstructorUser}`);
    dispatch({type: GET_INSTRUCTOR_USER, payload: response.data})
  }
}
