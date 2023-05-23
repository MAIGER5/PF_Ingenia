export const REMOVE_ONE_FROM_CARRITO = 'REMOVE_ONE_FROM_CARRITO';

export const RemoveOneFromCarrito = (id) => {
  return async function(dispatch) {
  dispatch({type: REMOVE_ONE_FROM_CARRITO, payload: id})
  }
}
