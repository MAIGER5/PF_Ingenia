import axios from "axios";

export const PAUSAR_USER_INSTRUCTOR = 'PAUSAR_USER_INSTRUCTOR';

const URLpausarUserInstructor = 'http://localhost:3001/user/delete'


export const PausarUserOInstructor = (idUser) => {
    return async function(){
        await axios.put(`${URLpausarUserInstructor}`, {"idUser":idUser});
      }
}
