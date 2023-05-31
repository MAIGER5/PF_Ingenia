import axios from 'axios'

export const ADD_FAVORITE = 'ADD_FAVORITE';

export const addFavoritos = (idUser, idCourse) => {
  return async function(dispatch) {
    await axios.post(`${import.meta.env.VITE_HOST}/user/favorite?idUser=${idUser}&idCourse=${idCourse}`);
    dispatch({type:ADD_FAVORITE})
  }
}
