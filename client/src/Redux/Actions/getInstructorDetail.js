import axios from "axios";
export const GET_INSTRUCTOR_DATAIL = 'GET_INSTRUCTOR_DATAIL';


export const getInstructorDetail = (nameInstructor) => {
    return async function(dispatch) {
        const instructors = await axios.get(`${import.meta.env.VITE_HOST}/instructor`);
        const response =  instructors.data.filter((ele)=> ele.name == nameInstructor)
        dispatch({type: GET_INSTRUCTOR_DATAIL, payload: response})
      }
}
