export const DELET_FAVORITOS_REDUX = 'DELET_FAVORITOS_REDUX';

export const deletFavoritosRedux = (id) => {
  return async function(dispatch) {
  dispatch({type: DELET_FAVORITOS_REDUX, payload: id})
  }
}
