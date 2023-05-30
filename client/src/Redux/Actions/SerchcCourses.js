import axios from 'axios';

export const GET_COURSESEACH = 'GET_COURSESEACH';

export function getCoursesSearch(course) {
    return async function(dispatch) {
      const response = await axios.get(`${import.meta.env.VITE_HOST}/courses?title=${course}`);
      dispatch({ type: GET_COURSESEACH, payload: response.data });
    };
  }