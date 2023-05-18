export const REMOVE_ALL_FROM_CARRITO = 'REMOVE_ALL_FROM_CARRITO';

const URLdeleteAllItem = 'http://localhost:3001/XXXXX'

export const RemoveAllFromCarrito = (id) => {
    return async function(dispatch) {
        const response = await axios.delete(`${URLdeleteAllItem}/${id}`);
        return response;
    }
}
