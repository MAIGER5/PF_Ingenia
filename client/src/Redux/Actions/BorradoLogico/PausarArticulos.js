import axios from "axios";

export const PAUSAR_ATICULO = 'PAUSAR_ATICULO';

export const PausarArticulos = (idArticulo) => {
    return async function(){
        await axios.put(`${import.meta.env.VITE_HOST}/instructor/publicationdelete`, {"idPublications":idArticulo});
      }
}
