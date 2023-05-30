import axios from "axios";

export const PAUSAR_USER_INSTRUCTOR = 'PAUSAR_USER_INSTRUCTOR';


export const PausarUserOInstructor = (idUser) => {
    return async function(){
        await axios.put(`${import.meta.env.VITE_HOST}/user/delete`, {"idUser":idUser});
      }
}
