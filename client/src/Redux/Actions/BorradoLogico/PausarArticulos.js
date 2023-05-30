import axios from "axios";

export const PAUSAR_ATICULO = 'PAUSAR_ATICULO';

const URLpausarArticulo = 'http://localhost:3001/instructor/publicationdelete'

export const PausarArticulos = (idArticulo) => {
    return async function(){
        await axios.put(`${URLpausarArticulo}`, {"idPublications":idArticulo});
      }
}
