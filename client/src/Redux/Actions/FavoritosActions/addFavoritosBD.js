import axios from "axios";

export const ADD_FAVORITE_BD = 'ADD_FAVORITE_BD';

export const addFavoritosBD = (idUser, idCourse) => {
  return async function(dispatch) {
    await axios.post(`${import.meta.env.VITE_HOST}/user/favorite?idUser=${idUser}&idCourse=${idCourse}`);
    dispatch({type:ADD_FAVORITE_BD})
  }
}
