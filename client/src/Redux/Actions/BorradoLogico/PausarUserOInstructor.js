import axios from "axios";
import env from "../../../../env";

export const PAUSAR_USER_INSTRUCTOR = "PAUSAR_USER_INSTRUCTOR";

export const PausarUserOInstructor = (idUser) => {
  return async function () {
    await axios.put(`${env.VITE_HOST}/user/delete`, { idUser: idUser });
  };
};
