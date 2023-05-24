import axios from "axios";

const URLremovCarBd = 'http://localhost:3001/buy/carrito'

export const RemoveToByBD = (idCourse, userId) => {
    return async function() {
        await axios.delete(`${URLremovCarBd}?idCourse=${idCourse}&idUser=${userId}`)
        // dispatch({type: REMOVE_TO_CARRITO_BD});
    };
}
