import axios from "axios"

export const GET_ID_RATING_USER = 'GET_ID_RATING_USER';

// const URLcoursesUsers = 'http://localhost:3001/buy/assignPointView';

export const getIdRatingCourses = (id) => {
  //console.log("getIdCoursesUser");

    return async function(dispatch) {
      if(id === null) id = 0;
      const response = await axios.get(`${import.meta.env.VITE_HOST}/buy/assignPointView/${id}`);
      let responseId = await response.data.map((ele)=>ele.idCourse);
      //responseId = [4,5,7]
      //console.log(responseId);
      if (responseId.length) localStorage.setItem("myRatingCourses", responseId);
      else localStorage.setItem("myRatingCourses", "0")
      console.log(responseId.length);
      dispatch({type:GET_ID_RATING_USER, payload:responseId})
    }
}