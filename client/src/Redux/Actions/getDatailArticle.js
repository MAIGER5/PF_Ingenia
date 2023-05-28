import axios from "axios";

export const GET_DETAIL_ARTICLE = 'GET_DETAIL_ARTICLE';

const URLcourse = 'http://localhost:3001/instructor/publication/detail'

export const getDetailArticle = (id)=> {
    return async function(dispatch) {
        const response = await axios.get(`${URLcourse}/${id}`);
        dispatch({type: GET_DETAIL_ARTICLE, payload: response.data});
    };
};