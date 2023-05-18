export const FILTER_COURSES_CATEGORY = 'FILTER_COURSES_CATEGORY';

export function filterCoursesCategory(id) {
  return function  (dispatch) {
    dispatch({type: FILTER_COURSES_CATEGORY, payload: id})
  }
};