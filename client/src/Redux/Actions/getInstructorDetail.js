import axios from "axios";
export const GET_INSTRUCTOR_DATAIL = 'GET_INSTRUCTOR_DATAIL';

const URLinstructorUser = 'http://localhost:3001/instructor';

export const getInstructorDetail = (nameInstructor) => {
    return async function(dispatch) {
        const instructors = await axios.get(`${URLinstructorUser}`);
        const response =  instructors.data.filter((ele)=> ele.name == nameInstructor)
        dispatch({type: GET_INSTRUCTOR_DATAIL, payload: response})
      }
}
