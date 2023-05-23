import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios"


export default function Paypalbutton() {
  const handlePaymentSuccess = async () => {
    try {
      const response = await axios.post('http://localhost:3001/buy?costo=40' )
      window.location.href=response.data.links[1].href
     // console.log(response.data.links[1].href);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
   <button onClick={handlePaymentSuccess}>
    pagar
   </button>
  );
}