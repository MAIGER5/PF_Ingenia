import axios from "axios";

export const ADD_TO_CARRITO = 'ADD_TO_CARRITO';

export const addToCarrito = (id) => {
  return async function(dispatch) {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/courses/${id}`);
    dispatch({type: ADD_TO_CARRITO, payload: response.data});
};
  
};
