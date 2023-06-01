import axios from "axios";
import env from "../../../../env";

export const ADD_FAVORITE_REDUX = "ADD_FAVORITE_REDUX";

export const addFavoritosRedux = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${env.VITE_HOST}/courses/${id}`);
    dispatch({ type: ADD_FAVORITE_REDUX, payload: response.data });
  };
};
