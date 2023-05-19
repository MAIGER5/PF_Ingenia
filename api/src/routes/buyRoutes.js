const { Router } = require("express");
const buyRoutes = Router();
const {carritoHandlers,carritoGetHandlers,deleteCarritoHandlers} = require('../handlers/buy/carritoHandlers')
const {buyHandlers,executePayment}=require('../handlers/buy/buyHandlers')

buyRoutes.post('/',buyHandlers)
buyRoutes.get('/execute-payment',executePayment)
buyRoutes.get('/carrito/:id',carritoGetHandlers)
buyRoutes.post('/carrito',carritoHandlers)
buyRoutes.delete('/carrito',deleteCarritoHandlers)

module.exports = buyRoutes;
