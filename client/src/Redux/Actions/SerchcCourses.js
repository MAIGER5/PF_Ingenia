import axios from 'axios';

export const GET_COURSESEACH = 'GET_COURSESEACH';

const URLcourse = 'http://localhost:3001/courses'

export function getCoursesSearch(course) {
    return async function(dispatch) {
      const response = await axios.get(`${URLcourse}?title=${course}`);
      dispatch({ type: GET_COURSESEACH, payload: response.data });
    };
  }