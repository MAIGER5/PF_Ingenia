import { GET_COURSES } from "../Actions/getCourses";
import { CLEAN_DETAIL } from "../Actions/cleanDetail";
import { GET_DATAIL_COURSE } from "../Actions/getDetailCourse";
import { LOGIN_USER } from "../../Components/FormLogin/FormLogin";


const initialState = {
    allCourse: [],
    allCourseCopy: [],
    courseDetail: [],
    loginUser: {
        type: 0,
        email: "",
        password: "",
      }
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_COURSES:
        return {
            ...state,
            allCourse: action.payload,
            allCourseCopy: action.payload
        };

        case GET_DATAIL_COURSE:
            return {
                ...state,
                courseDetail: action.payload
            };

        case CLEAN_DETAIL:
            return {
                ...state,
                courseDetail:[],
            };

        case LOGIN_USER:
            console.log("Paso por el Reducer");
            console.log(action.payload);
            localStorage.setItem("type", action.payload.type);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("password", action.payload.password);
            return {
                ...state,
                loginUser: action.payload
            }

        default:
            return { ...state };
    }
};

export default rootReducer;