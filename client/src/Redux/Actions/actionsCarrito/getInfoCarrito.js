export const GET_INFO_CARRITO = 'GET_INFO_CARRITO'

const URLinfoCarrito = 'http://localhost:3001/XXXXX'

export const getInfoCarrito = (idUser) => {
  return async function(dispatch){
    const response = await axios.get(`${URLinfoCarrito}`, idUser)
    dispatch({type: GET_INFO_CARRITO, payload: response.data})
  }
}
