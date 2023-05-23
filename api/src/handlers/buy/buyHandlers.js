const request = require('request');
require('dotenv').config();
const {CLIENTPAYPAL,SECRET} = process.env;
const {facturacion} = require('../../controllers/buy/paypal/executePaymentControllers');
const axios = require('axios');


const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

const buyHandlers = async (req,res)=>{
    const {costo} = req.params  
    const body = {
        "intent": "CAPTURE",
        "purchase_units": [{
            "amount": {
            "currency_code": "USD", 
                  "value": costo
              }
          }],
        "application_context": {
        "brand_name": "Ingenia",
        "landing_page":"NO_PREFERENCE", 
        "user_action":"PAY_NOW",
        "return_url": "http://localhost:3001/buy/execute-payment", 
        "cancel_url": "http://localhost:3001/buy/cancel-payment"
        }
      }
    try {
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`,body,{
            auth :{
                username: CLIENTPAYPAL, 
                password:SECRET
            }
        })
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const executePayment = async (req,res)=>{
    const {token} = req.query;
    try {
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,{},{
        auth :{
            username: CLIENTPAYPAL, 
            password:SECRET
        }}
        )
        const info = response.data
        const factura = await facturacion(info);
        res.redirect('http://localhost:5173/Purchaseconfirmation')
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const cancelPayment = (req,res) =>{
    try {
        res.redirect('https://samuraielectric.online/')
    } catch (error) {
        
    }
}

module.exports={
    buyHandlers,
    executePayment,
    cancelPayment
}

