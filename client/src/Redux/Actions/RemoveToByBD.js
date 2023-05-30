import axios from "axios";

export const RemoveToByBD = (idCourse, userId) => {
    return async function() {
        await axios.delete(`${import.meta.env.VITE_HOST}/buy/carrito?idCourse=${idCourse}&idUser=${userId}`)
        // dispatch({type: REMOVE_TO_CARRITO_BD});
    };
}
