export const REMOVE_ONE_FROM_CARRITO = 'REMOVE_ONE_FROM_CARRITO';

const URLdeleteOneItem = 'http://localhost:3001/XXXXX'
export const RemoveOneFromCarrito = (id) => {
  return async function(dispatch) {
    const response = await axios.delet(`${URLdeleteOneItem}/${id}`);
    return response;
  }
}
