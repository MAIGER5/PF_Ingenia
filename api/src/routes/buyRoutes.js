const { Router } = require("express");
const buyRoutes = Router();
const {carritoHandlers,carritoGetHandlers,deleteCarritoHandlers} = require('../handlers/buy/carritoHandlers')
const {buyHandlers,executePayment,cancelPayment}=require('../handlers/buy/buyHandlers')

buyRoutes.post('/:costo',buyHandlers)
buyRoutes.get('/execute-payment',executePayment)
buyRoutes.get('/cancel-payment',cancelPayment)
buyRoutes.get('/carrito/:id',carritoGetHandlers)
buyRoutes.post('/carrito',carritoHandlers)
buyRoutes.delete('/carrito',deleteCarritoHandlers)

module.exports = buyRoutes;
