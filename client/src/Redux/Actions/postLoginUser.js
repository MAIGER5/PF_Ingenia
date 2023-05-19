export const POST_LOGIN_USER = 'POST_LOGIN_USER';

import axios from "axios";

const URLuser = "http://localhost:3001/user/login";

export const postLoginUser = (body) => {
    return async function(dispatch) {
        const response = await axios.post(`${URLuser}`, body );
        dispatch({type: POST_LOGIN_USER, payload: response.data})
    }
}
