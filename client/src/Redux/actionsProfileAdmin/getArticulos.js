import axios from "axios";

export const GET_ARTICULOS = 'GET_ARTICULOS';

const URLarticulos = 'http://localhost:3001/instructor/publication'

export const getArticulos = () => {
  return async function(dispatch) {
    const response = await axios.get(`${URLarticulos}`);
    dispatch({type: GET_ARTICULOS, payload: response.data})
  }
}
