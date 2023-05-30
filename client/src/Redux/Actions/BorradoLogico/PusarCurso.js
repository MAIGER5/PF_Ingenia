import axios from "axios";

export const PAUSAR_CURSO = 'PAUSAR_CURSO';

const URLpausarCurso = 'http://localhost:3001/courses/delete'

export const PusarCurso = (idCourse) => {
  return async function(){
    await axios.put(`${URLpausarCurso}`, {"idCourse":idCourse});
  }
}
