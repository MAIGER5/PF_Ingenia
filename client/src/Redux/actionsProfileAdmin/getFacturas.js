import axios from 'axios'
export const GET_FACTURAS = 'GET_FACTURAS';

const URLfacturas = 'http://localhost:3001/buy/bills'

export const getFacturas = () => {
  return async function(dispatch) {
    const response = await axios.get(`${URLfacturas}`)
    dispatch({type: GET_FACTURAS, payload: response.data})
  }
}
