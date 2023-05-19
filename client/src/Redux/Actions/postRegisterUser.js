import axios from "axios"

const URLuser = "http://localhost:3001/user/created"

export const postRegisterUser = (payload) => {
    return async function(dispatch) {
        const response = await axios.post(`${URLuser}`, payload );
        return response;
    }
}
