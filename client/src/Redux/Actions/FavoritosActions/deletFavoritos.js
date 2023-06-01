import axios from "axios";
import env from "../../../../env";

export const DELET_FAVORITE = "DELET_FAVORITE";

export const deletFavoritos = (idUser, idCourse) => {
  return async function (dispatch) {
    await axios.delete(
      `${env.VITE_HOST}/user/favorite?idUser=${idUser}&idCourse=${idCourse}`
    );
    dispatch({ type: DELET_FAVORITE });
  };
};
