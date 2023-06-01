import axios from "axios";
import env from "../../../../env";

export const PAUSAR_ATICULO = "PAUSAR_ATICULO";

export const PausarArticulos = (idArticulo) => {
  return async function () {
    await axios.put(`${env.VITE_HOST}/instructor/publicationdelete`, {
      idPublications: idArticulo,
    });
  };
};
