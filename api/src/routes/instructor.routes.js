const { Router } = require("express");
const {instructorGetHandlers,instructorPostHandlers,publicationsPostHandlers,
    publicationsByIdHandlers,publicationsDetailHandlers,publicationsGetPostHandlers} = require('../handlers/instructor/instructorGetHandlers')

const instructorRouter = Router();

instructorRouter.get('/',instructorGetHandlers)
instructorRouter.post('/publication',publicationsPostHandlers)
instructorRouter.get('/publication',publicationsGetPostHandlers)
instructorRouter.get('/publication/:id',publicationsByIdHandlers)
instructorRouter.get('/publication/detail/:id',publicationsDetailHandlers)
instructorRouter.post('/',instructorPostHandlers)

module.exports = instructorRouter;