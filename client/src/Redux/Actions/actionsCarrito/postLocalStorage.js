import axios from "axios"
export const POST_LOCAL_STORAGE = 'POST_LOCAL_STORAGE'


export const postLocalStorage = () => {
  const localStorageData = { ...localStorage };
  return async function(dispatch) {
    dispatch({type: POST_LOCAL_STORAGE, payload: localStorageData})
  }
}