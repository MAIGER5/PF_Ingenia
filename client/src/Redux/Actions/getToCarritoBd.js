import axios from "axios";

export const GET_TO_CARRITO_BD = 'GET_TO_CARRITO_BD';

const URLcarritoBd = 'http://localhost:3001/buy/carrito/';

export const getToCarritoBd = (idUser) => {
  return async function(dispatch){
    const response = await axios.get(`${URLcarritoBd}${idUser}`);
    dispatch({type: GET_TO_CARRITO_BD, payload: response.data})
  };
};
