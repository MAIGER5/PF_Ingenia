import axios from "axios";
export const GET_USER = 'GET_USER';

const URLUser =`${import.meta.env.VITE_HOST}/user/`;

export const getUsiarios = (id) => {
    return async function(dispatch) {
        const users = await axios.get(`${URLUser}${id}`);
      
        dispatch({type: GET_USER, payload: users})
      }
}