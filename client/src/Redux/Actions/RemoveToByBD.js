import axios from "axios";
import env from "../../../env";
export const RemoveToByBD = (idCourse, userId) => {
  return async function () {
    await axios.delete(
      `${env.VITE_HOST}/buy/carrito?idCourse=${idCourse}&idUser=${userId}`
    );
    // dispatch({type: REMOVE_TO_CARRITO_BD});
  };
};
