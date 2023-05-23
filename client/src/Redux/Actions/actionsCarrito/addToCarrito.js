import axios from "axios";

export const ADD_TO_CARRITO = 'ADD_TO_CARRITO';

const URLcourse = 'http://localhost:3001/courses'

export const addToCarrito = (id) => {
  return async function(dispatch) {
    const response = await axios.get(`${URLcourse}/${id}`);
    dispatch({type: ADD_TO_CARRITO, payload: response.data});
};
  
};
