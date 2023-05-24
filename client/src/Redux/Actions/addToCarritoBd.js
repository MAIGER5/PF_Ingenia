import axios from "axios";

export const ADD_TO_CARRITO_BD = 'ADD_TO_CARRITO_BD';

const URLaddCarBd = 'http://localhost:3001/buy/carrito'

export const addToCarritoBd = (idCourse, idUser) => {
  return async function() {
    await axios.post(`${URLaddCarBd}?idCourse=${idCourse}&idUser=${idUser}`)
    dispatch({type: ADD_TO_CARRITO_BD});
};
  
};