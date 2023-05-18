export const ADD_TO_CARRITO = 'ADD_TO_CARRITO';

const URLcarrito = 'http://localhost:3001/XXXXXX'

export const addToCarrito = (payload) => {
  return async function(dispatch) {
    const response = await axios.post(`${URLcarrito}/`, payload)
    return response;
  }
}
