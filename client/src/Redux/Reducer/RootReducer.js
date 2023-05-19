import { GET_COURSES } from "../Actions/getCourses";
import { CLEAN_DETAIL } from "../Actions/cleanDetail";
import { GET_DATAIL_COURSE } from "../Actions/getDetailCourse";
import { GET_CATEGORIES } from "../Actions/getCategories";
import {GET_COURSESCATEGORY} from "../Actions/getCoursescategory"
import { FILTER_BY_LANGUAGE } from "../Actions/filterporlenguaje";
import { FILTER_BY_DIFFICULTY} from "../Actions/filterDificulti";
import { ORDER_BY_DATE } from "../Actions/filterByDate";
import { GET_COURSESEACH } from "../Actions/SerchcCourses";

const initialState = {
    allCourse: [],
    allCourseCopy: [],
    courseDetail: [],
    categories:[], 
    filtercourses:[],
    allCourseCategory:[],
    allCarrito:[]

};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_COURSES:
        return {
            ...state,
            allCourse: action.payload,
            allCourseCopy: action.payload,
            allCarrito: action.payload
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
            case GET_CATEGORIES:
            return {
                ...state,
                categories:action.payload,
            };
            case FILTER_BY_LANGUAGE:
                    
                    return {
                        ...state,
                        filtercourses: action.payload,
                        
                    };
                    case  FILTER_BY_DIFFICULTY:
                    
                    return {
                        ...state,
                        filtercourses: action.payload,
                        
                    };
                    case ORDER_BY_DATE:

                    return {
                        ...state,
                        filtercourses: action.payload,
        
                    };
                    case  GET_COURSESEACH:

                    return {
                        ...state,
                        allCourseCategory: action.payload,
        
                    };

        default:
            return { ...state };
    }
};

export default rootReducer;