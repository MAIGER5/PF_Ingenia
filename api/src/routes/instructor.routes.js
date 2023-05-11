const { Router } = require("express");
const {instructorGetHandlers,instructorPostHandlers} = require('../handlers/instructor/instructorGetHandlers')

const instructorRouter = Router();

instructorRouter.get('/',instructorGetHandlers)
instructorRouter.post('/',instructorPostHandlers)

module.exports = instructorRouter;