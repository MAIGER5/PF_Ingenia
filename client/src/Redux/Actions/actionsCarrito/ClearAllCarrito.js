export const CLEAR_ALL_CARRITO = 'CLEAR_ALL_CARRITO';

const URLclearCarrito = 'http://localhost:3001/XXXXX'

export const ClearAllCarrito = () => {
    return async function(dispatch) {
        const response = await axios.delete(`${URLclearCarrito}`);
        return response;
      }
}
