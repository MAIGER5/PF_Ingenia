export const GET_INFO_CARRITO = "GET_INFO_CARRITO";
import axios from "axios";
import env from "../../../../env";

export const getInfoCarrito = (idUser) => {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/XXXXX`, idUser);
    dispatch({ type: GET_INFO_CARRITO, payload: response.data });
  };
};
