import axios from "axios";
import env from "../../../env";

export const GET_TO_CARRITO_BD = "GET_TO_CARRITO_BD";

export const getToCarritoBd = (idUser) => {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/buy/carrito/${idUser}`);
    dispatch({ type: GET_TO_CARRITO_BD, payload: response.data });
  };
};
