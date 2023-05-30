import axios from "axios";

export const PAUSAR_CURSO = 'PAUSAR_CURSO';

export const PusarCurso = (idCourse) => {
  return async function(){
    await axios.put(`${import.meta.env.VITE_HOST}/courses/delete`, {"idCourse":idCourse});
  }
}
