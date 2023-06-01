import axios from "axios";
export const GET_FACTURAS = "GET_FACTURAS";
import env from "../../../env";

export const getFacturas = () => {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/buy/bills`);
    dispatch({ type: GET_FACTURAS, payload: response.data });
  };
};
