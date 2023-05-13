export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const cleandDetail = ()=> {
    return function(dispatch) {
        dispatch({type: CLEAN_DETAIL})
      }
};