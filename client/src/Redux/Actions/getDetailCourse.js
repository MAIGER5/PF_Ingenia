export const GET_DATAIL_COURSE = 'GET_DATAIL_COURSE';


export const getDetailCourse = (id)=> {
    return function(dispatch) {
        dispatch({type: GET_DATAIL_COURSE, payload: id})
    };
};