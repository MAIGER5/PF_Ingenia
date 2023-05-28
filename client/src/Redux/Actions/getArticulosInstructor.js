import axios from "axios";
export const GET_ARTICULOS_INSTRUCTOR = 'GET_ARTICULOS_INSTRUCTOR';

const URLarticulos = 'http://localhost:3001/instructor/publication';

export const getArticulosInstructor = (nameInstructor) => {
    return async function(dispatch) {
        const articuls = await axios.get(`${URLarticulos}`);
        const response = articuls.data?.filter((art)=>art.User?.name === nameInstructor)
        dispatch({type: GET_ARTICULOS_INSTRUCTOR, payload: response})
      }
}
