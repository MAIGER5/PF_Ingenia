import axios from "axios";

const URLremovCarBd = 'http://localhost:3001/buy/carrito/'

export const RemoveToByBD = () => {
    return async function() {
        await axios.delete(`${URLremovCarBd}${idCourse}`)
        // dispatch({type: REMOVE_TO_CARRITO_BD});
    };
}
