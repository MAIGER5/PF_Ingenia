const { Router } = require("express");
const {
  getCourseHandlers,
  getCourseByIDHandlers,
  createCourseHandlers,
} = require("../handlers/course/course.handlers");

const courseRouter = Router();

// Ruta para todos los cursos
courseRouter.get("/", getCourseHandlers);

courseRouter.get("/:id", getCourseByIDHandlers);

courseRouter.post("/", createCourseHandlers);

module.exports = courseRouter;
