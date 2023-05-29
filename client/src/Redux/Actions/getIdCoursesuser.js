import axios from "axios"

export const GET_ID_COURSES_USER = 'GET_ID_COURSES_USER';

const URLcoursesUsers = 'http://localhost:3001/user/myCourses';

export const getIdCoursesuser = (id) => {
  //console.log("getIdCoursesUser");

    return async function(dispatch) {
      const response = await axios.get(`${URLcoursesUsers}/${id}`);
      const responseId = response.data.map((ele)=>ele.idCourse);
      //console.log(responseId.length);
      if (responseId.length) localStorage.setItem("myCourses", responseId);
      else localStorage.setItem("myCourses", "0")
      dispatch({type:GET_ID_COURSES_USER, payload:responseId})
    }
}
