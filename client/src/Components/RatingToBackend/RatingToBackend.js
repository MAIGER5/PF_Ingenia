import axios from "axios";

export default async function RatingToBackend(ratingData) {

    try {
        const response = await axios.put(`http://localhost:3001/buy/assignPoint`);
        const data = response.data;

        return data;

      } catch (error) {
        console.error("Error fetching data:", error);
        return error; // Devuelve un arreglo vacío en caso de error
      }

}