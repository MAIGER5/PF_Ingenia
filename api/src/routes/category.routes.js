const { Router } = require("express");
const categoryRoutes = Router();
const {categoryHandlers,posCategoryControllers,categoryIdHandlers} = require('../handlers/category/category.handlers')

// Ruta para todos los cursos
categoryRoutes.get("/",categoryHandlers);
categoryRoutes.get('/:id',categoryIdHandlers)
categoryRoutes.post('/',posCategoryControllers);

module.exports = categoryRoutes;
