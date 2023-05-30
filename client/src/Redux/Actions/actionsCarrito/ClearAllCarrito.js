export const CLEAR_ALL_CARRITO = 'CLEAR_ALL_CARRITO';
import axios from "axios";

export const ClearAllCarrito = () => {
    return async function(dispatch) {
        const response = await axios.delete(`${import.meta.env.VITE_HOST}/XXXXX`);
        return response;
      }
}
