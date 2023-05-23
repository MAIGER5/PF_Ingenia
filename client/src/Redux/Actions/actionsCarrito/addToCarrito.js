import axios from "axios";

export const ADD_TO_CARRITO = 'ADD_TO_CARRITO';

const URLcourse = 'http://localhost:3001/courses'
const URLaddCarBd = 'http://localhost:3001/buy/carrito?idCourse=1&idUser=1'

export const addToCarrito = (idCourse) => {
  return async function(dispatch) {
    const response = await axios.get(`${URLcourse}/${idCourse}`);
    const response2 = await axios.post(`${URLaddCarBd}?idCourse=${idCourse}&idUser=${idUser}`)
    dispatch({type: ADD_TO_CARRITO, payload: response.data});
};
  
};
