const { Router } = require("express");
const rellenarRouter = Router();
const {rellenarHandlers} = require('../handlers/rellenar/rellenarHandlers')

rellenarRouter.get('/',rellenarHandlers)

module.exports = rellenarRouter;