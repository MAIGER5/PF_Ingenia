import axios from "axios";

export const GET_DATAIL_COURSE = 'GET_DATAIL_COURSE';


export const getDetailCourse = (id)=> {
    return async function(dispatch) {
        const response = await axios.get(`${import.meta.env.VITE_HOST}/courses/${id}`);
        dispatch({type: GET_DATAIL_COURSE, payload: response.data});
    };
};