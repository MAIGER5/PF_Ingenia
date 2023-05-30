import axios from "axios"

export const GET_ID_COURSES_USER = 'GET_ID_COURSES_USER';


export const getIdCoursesuser = (id) => {
  //console.log("getIdCoursesUser");

    return async function(dispatch) {
      if(id === null) id = 0;
      const response = await axios.get(`${import.meta.env.VITE_HOST}/user/myCourses/${id}`);
      const responseId = response.data.map((ele)=>ele.idCourse);
      //console.log(responseId.length);
      if (responseId.length) localStorage.setItem("myCourses", responseId);
      else localStorage.setItem("myCourses", "0")
      dispatch({type:GET_ID_COURSES_USER, payload:responseId})
    }
}
