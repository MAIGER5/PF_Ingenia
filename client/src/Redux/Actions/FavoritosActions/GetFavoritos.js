import axios from "axios";
import env from "../../../../env";

export const GET_FAVORITE = "GET_FAVORITE";

export const GetFavoritos = (idUser) => {
  return async function (dispatch) {
    const response = await axios.get(
      `${env.VITE_HOST}/user/favorite/${idUser}`
    );
    dispatch({ type: GET_FAVORITE, payload: response.data });
  };
};
