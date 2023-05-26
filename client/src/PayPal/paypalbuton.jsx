import React from 'react'
import axios from "axios"
import Button from '@mui/material/Button'
import PaymentIcon from '@mui/icons-material/Payment';
import { useSelector } from 'react-redux';
export default function Paypalbutton() {
  const totalpagar=useSelector(state=>state.totalCarrito)
  const id=useSelector(state=>state.localStorageData.idUser)
  const handlePaymentSuccess = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/buy?costo=${totalpagar}&idUser=${id}` )
      window.location.href=response.data.links[1].href
     
    } catch (error) {
      console.error(error);
    }
    
  };
 
 console.log(id)
  return (
    <Button variant="contained" color="primary" sx={{color:"white",fontSize:19}} onClick={handlePaymentSuccess} startIcon={<PaymentIcon sx={{color:"white"}}/>}>
      pagar con paypal
    </Button>
   
  );
}