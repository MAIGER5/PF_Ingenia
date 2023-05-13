import axios from "axios";

export const GET_DATAIL_COURSE = 'GET_DATAIL_COURSE';

const URLcourse = 'http://localhost:3001/courses'

export const getDetailCourse = (id)=> {
    return async function(dispatch) {
        const response = await axios.get(`${URLcourse}/${id}`);
        dispatch({type: GET_DATAIL_COURSE, payload: response.data});
    };
};