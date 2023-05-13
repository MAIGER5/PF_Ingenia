import { GET_COURSES } from "../Actions/getCourses";
import { CLEAN_DETAIL } from "../Actions/cleanDetail";
import { GET_DATAIL_COURSE } from "../Actions/getDetailCourse";


const initialState = {
    allCourse: [],
    allCourseCopy: [],
    courseDetail: []
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

        default:
            return { ...state };
    }
};

export default rootReducer;