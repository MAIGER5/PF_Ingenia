import axios from "axios";
import env from "../../../../env";

export const ADD_TO_CARRITO = "ADD_TO_CARRITO";

export const addToCarrito = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/courses/${id}`);
    dispatch({ type: ADD_TO_CARRITO, payload: response.data });
  };
};
