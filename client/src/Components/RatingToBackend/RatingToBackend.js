import axios from "axios";
import env from "../../../env";

export default async function RatingToBackend(ratingData) {

  try {
    const response = await axios.put(`${env.VITE_HOST}/buy/assignPoint`);
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error; // Devuelve un arreglo vacío en caso de error
  }
}

