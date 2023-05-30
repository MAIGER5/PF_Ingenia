import axios from "axios";

export default async function RequestRatingUserCourses () {

    try {
        const idUser = localStorage.getItem("idUser");
        const response = await axios.get(`http://localhost:3001/buy/assignPointView/${idUser}`);
        const data = response.data;

        /* for (let i = 0; i < data.length; i++) {
            data[i].Categories = [{name: data[i].categories}]
            data[i].Users = [data[i].users] } */

        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Devuelve un arreglo vacío en caso de error
      }

}