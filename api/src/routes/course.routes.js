const { Router } = require("express");
const {
  getCourse,
  getCourseByID,
  createCourse,
} = require("../controllers/course.controller");

const courseRouter = Router();

// Ruta para todos los cursos
courseRouter.get("/", getCourse);

courseRouter.get("/:id", getCourseByID);

courseRouter.post("/", createCourse);

module.exports = courseRouter;
