export const CLEAR_ALL_CARRITO = "CLEAR_ALL_CARRITO";
import axios from "axios";
import env from "../../../../env";

export const ClearAllCarrito = () => {
  return async function (dispatch) {
    const response = await axios.delete(`${env.VITE_HOST}/XXXXX`);
    return response;
  };
};
