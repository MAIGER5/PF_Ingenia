const request = require('request');
require('dotenv').config();
const {CLIENTPAYPAL,SECRET} = process.env;

const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
const auth = {user: CLIENTPAYPAL, pass:SECRET};

const executePaymentControllers =async (token)=>{
    
    const response = await request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    })
    return response.data
    
}
module.exports = {
    executePaymentControllers
};