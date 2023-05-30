import axios from "axios";

export const GET_DETAIL_ARTICLE = 'GET_DETAIL_ARTICLE';

export const getDetailArticle = (id)=> {
    return async function(dispatch) {
        const response = await axios.get(`${import.meta.env.VITE_HOST}/instructor/publication/detail/${id}`);
        dispatch({type: GET_DETAIL_ARTICLE, payload: response.data});
    };
};