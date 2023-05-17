const { Router } = require("express");
const buyRoutes = Router();
const {carritoHandlers} = require('../handlers/buy/carritoHandlers')

buyRoutes.post('/carrito',carritoHandlers)

module.exports = buyRoutes;
