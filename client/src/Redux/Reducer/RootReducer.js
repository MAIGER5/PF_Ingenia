import { GET_COURSES } from "../Actions/getCourses";
import { CLEAN_DETAIL } from "../Actions/cleanDetail";
import { GET_DATAIL_COURSE } from "../Actions/getDetailCourse";
import { GET_COURSESCATEGORY } from "../Actions/getCoursescategory";
import {FILTER_BY_LANGUAGE} from "../Actions/filterporlenguaje"

const initialState = {
    allCourse: [],
    allCourseCopy: [],
    courseDetail: [],
    allCourseCategory: [],
    filtercaterogy:[]
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
            case GET_COURSESCATEGORY:
                return {
                    ...state,
                    allCourseCategory: action.payload,
                    
                };  
                case FILTER_BY_LANGUAGE:
                    
                    return {
                        ...state,
                        filtercaterogy: action.payload,
                        
                    };  

        default:
            return { ...state };
    }
};

export default rootReducer;