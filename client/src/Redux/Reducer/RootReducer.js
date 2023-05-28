import { GET_COURSES } from "../Actions/getCourses";
import { CLEAN_DETAIL } from "../Actions/cleanDetail";
import { GET_DATAIL_COURSE } from "../Actions/getDetailCourse";
import { GET_CATEGORIES } from "../Actions/getCategories";
import { GET_COURSESCATEGORY } from "../Actions/getCoursescategory";
import { FILTER_BY_LANGUAGE } from "../Actions/filterporlenguaje";
import { FILTER_BY_DIFFICULTY } from "../Actions/filterDificulti";
import { ORDER_BY_DATE } from "../Actions/filterByDate";
import { GET_COURSESEACH } from "../Actions/SerchcCourses";
import { FILTER_BY_PRICE } from "../Actions/filterByPrice";
import { ADD_TO_CARRITO } from "../Actions/actionsCarrito/addToCarrito";
import { POST_LOCAL_STORAGE } from "../Actions/actionsCarrito/postLocalStorage";
import { REMOVE_ONE_FROM_CARRITO } from "../Actions/actionsCarrito/RemoveOneFromCarrito";
import { GET_TO_CARRITO_BD } from "../Actions/getToCarritoBd";
import { BUTTON_PAYPAL } from "../Actions/butonpaypal";
import { TOTAL_CARRITO } from "../Actions/TotalCarrito";
import { SET_ACTIVE_TAB } from "../Actions/setActiveTab";
import { GET_ARTICULOS } from "../actionsProfileAdmin/getArticulos";
import { GET_FACTURAS } from "../actionsProfileAdmin/getFacturas";
import { GET_INSTRUCTOR_USER } from "../actionsProfileAdmin/getInstructorUser";

const initialState = {
  allCourse: [],
  allCourseCopy: [],
  courseDetail: [],
  categories: [],
  filtercourses: [],
  allCourseCategory: [],
  allCarrito: [],
  localStorageData: {},
  totalCarrito:0,
  setActiveTab: 1,
  articulos: [],
  facturas: [],
  instructor: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_COURSES:
      return {
        ...state,
        allCourse: action.payload,
        allCourseCopy: action.payload,
      };

    case GET_DATAIL_COURSE:
      return {
        ...state,
        courseDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        courseDetail: [],
      };
    case GET_COURSESCATEGORY:
      return {
        ...state,
        allCourseCategory: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case FILTER_BY_LANGUAGE:
      return {
        ...state,
        filtercourses: action.payload,
      };
    case FILTER_BY_DIFFICULTY:
      return {
        ...state,
        filtercourses: action.payload,
      };
    case ORDER_BY_DATE:
      return {
        ...state,
        filtercourses: action.payload,
      };
    case GET_COURSESEACH:
      return {
        ...state,
        allCourseCategory: action.payload,
      };
    case ADD_TO_CARRITO:
      return {
        ...state,
        allCarrito: [...state.allCarrito, action.payload],
      };
    case GET_TO_CARRITO_BD :

        return {
            ...state,
            allCarrito: action.payload,
        };
    case REMOVE_ONE_FROM_CARRITO:
      return {
        ...state,
        allCarrito: state.allCarrito.filter(
          (ele) => ele.idCourse !== action.payload
        ),
      };
    case POST_LOCAL_STORAGE:
      return {
        ...state,
        localStorageData: action.payload,
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        filtercourses: action.payload,
      };
    case BUTTON_PAYPAL:
      return {
        ...state,
        ButtonPaypal: action.payload,
      };
    case TOTAL_CARRITO:
      return {
        ...state,
        totalCarrito: action.payload,
    };
    case GET_ARTICULOS:
      return {
        ...state,
        articulos: action.payload,
    };
    case GET_FACTURAS:
      return {
        ...state,
        facturas: action.payload,
    };
    case GET_INSTRUCTOR_USER:
      return {
        ...state,
        instructor: action.payload,
    };
    case SET_ACTIVE_TAB:
      return  {
        ...state,
        setActiveTab: action.payload,
      };

    default:
      return { ...state };
    }

};

export default rootReducer;
