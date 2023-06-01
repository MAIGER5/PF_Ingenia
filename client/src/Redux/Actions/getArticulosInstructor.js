import axios from "axios";
import env from "../../../env";
export const GET_ARTICULOS_INSTRUCTOR = "GET_ARTICULOS_INSTRUCTOR";

export const getArticulosInstructor = (nameInstructor) => {
  return async function (dispatch) {
    const articuls = await axios.get(`${env.VITE_HOST}/instructor/publication`);
    const response = articuls.data?.filter(
      (art) => art.User?.name === nameInstructor
    );
    dispatch({ type: GET_ARTICULOS_INSTRUCTOR, payload: response });
  };
};
