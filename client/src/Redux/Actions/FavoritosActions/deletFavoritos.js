import axios from "axios"

export const DELET_FAVORITE = 'DELET_FAVORITE';

export const deletFavoritos = (idUser, idCourse) => {
    return async function(dispatch) {
        await axios.delete(`${import.meta.env.VITE_HOST}/user/favorite?idUser=${idUser}&idCourse=${idCourse}`);
        dispatch({type:DELET_FAVORITE})
      }
}
