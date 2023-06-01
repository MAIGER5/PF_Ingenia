import axios from "axios";
import env from "../../../../env";

export const ADD_FAVORITE_BD = "ADD_FAVORITE_BD";

export const addFavoritosBD = (idUser, idCourse) => {
  return async function (dispatch) {
    await axios.post(
      `${env.VITE_HOST}/user/favorite?idUser=${idUser}&idCourse=${idCourse}`
    );
    dispatch({ type: ADD_FAVORITE_BD });
  };
};
