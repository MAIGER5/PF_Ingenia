import axios from "axios";
import env from "../../../../env";

export const PAUSAR_CURSO = "PAUSAR_CURSO";

export const PusarCurso = (idCourse) => {
  return async function () {
    await axios.put(`${env.VITE_HOST}/courses/delete`, { idCourse: idCourse });
  };
};
