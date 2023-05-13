const { Router } = require("express");
const categoryRoutes = Router();
const {categoryHandlers,posCategoryControllers} = require('../handlers/category/category.handlers')

// Ruta para todos los cursos
categoryRoutes.get("/",categoryHandlers);
categoryRoutes.post('/',posCategoryControllers);

module.exports = categoryRoutes;
