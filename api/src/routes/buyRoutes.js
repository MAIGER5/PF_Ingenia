const { Router } = require("express");
const buyRoutes = Router();
const {carritoHandlers,carritoGetHandlers,deleteCarritoHandlers} = require('../handlers/buy/carritoHandlers')

buyRoutes.get('/carrito/:id',carritoGetHandlers)
buyRoutes.post('/carrito',carritoHandlers)
buyRoutes.delete('/carrito',deleteCarritoHandlers)

module.exports = buyRoutes;
