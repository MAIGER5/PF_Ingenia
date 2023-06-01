const request = require('request');
require('dotenv').config();
const {CLIENTPAYPAL,SECRET} = process.env;
const {facturacion,billsControllers} = require('../../controllers/buy/paypal/executePaymentControllers');
const axios = require('axios');


const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

const buyHandlers = async (req,res)=>{
    const {costo,idUser} = req.query  
    console.log(idUser);
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
        "return_url": `https://pfingenia-production.up.railway.app/buy/execute-payment?idUser=${idUser}`, 
        "cancel_url": "https://pfingenia-production.up.railway.app/buy/cancel-payment"
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
    const {idUser,token} = req.query;
    try {
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,{},{
        auth :{
            username: CLIENTPAYPAL, 
            password:SECRET
        }}
        )
        const info = response.data
        const factura = await facturacion(info,idUser);
        // res.json(factura)
        res.redirect('https://client-six-weld.vercel.app/Purchaseconfirmation')
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const cancelPayment = (req,res) =>{
    try {
        res.redirect('https://client-six-weld.vercel.app/Purchaserejection')
    } catch (error) {
        
    }
}
const billsHandlers = async (req,res)=>{
    try {
        const response = await billsControllers()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}
module.exports={
    buyHandlers,
    executePayment,
    cancelPayment,
    billsHandlers
}

