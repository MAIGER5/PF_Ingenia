import axios from "axios";
import env from "../../../env";

export const ADD_TO_CARRITO_BD = "ADD_TO_CARRITO_BD";

export const addToCarritoBd = (idCourse, idUser) => {
  return async function () {
    await axios.post(
      `${env.VITE_HOST}/buy/carrito?idCourse=${idCourse}&idUser=${idUser}`
    );
    dispatch({ type: ADD_TO_CARRITO_BD });
  };
};
