import axios from "axios";

export const GET_ARTICULOS = 'GET_ARTICULOS';

export const getArticulos = () => {
  return async function(dispatch) {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/instructor/publication`);
    dispatch({type: GET_ARTICULOS, payload: response.data})
  }
}
