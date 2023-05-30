import axios from 'axios'
export const GET_FACTURAS = 'GET_FACTURAS';


export const getFacturas = () => {
  return async function(dispatch) {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/buy/bills`)
    dispatch({type: GET_FACTURAS, payload: response.data})
  }
}
