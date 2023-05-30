import axios from "axios";
export const GET_INSTRUCTOR_USER = 'GET_INSTRUCTOR_USER';


export const getInstructorUser = () => {
  return async function(dispatch) {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/instructor`);
    dispatch({type: GET_INSTRUCTOR_USER, payload: response.data})
  }
}
