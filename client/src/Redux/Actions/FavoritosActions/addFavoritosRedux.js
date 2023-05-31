import axios from "axios";

export const ADD_FAVORITE_REDUX = 'ADD_FAVORITE_REDUX';

export const addFavoritosRedux = (id) => {
  return async function(dispatch) {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/courses/${id}`);
    dispatch({type: ADD_FAVORITE_REDUX, payload: response.data});
};
  
};