import axios from "axios";
import env from "../../../env";

export const GET_COURSES_INSTRUCTOR = "GET_COURSES_INSTRUCTOR";


export const getCoursesInstructor = (idInstructor) => {
    return async function(dispatch) {
        const courses = await axios.get(`${import.meta.env.VITE_HOST}/courses/`);
        const response = courses.data?.filter((cur)=>cur.Users[0]?.idUser == idInstructor)
        dispatch({type: GET_COURSES_INSTRUCTOR, payload: response})
      }
}
