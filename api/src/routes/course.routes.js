const { Router } = require("express");
const getCourse = require("../controllers/getCourse");

const courseRouter = Router();

// Ruta para todos los cursos
courseRouter.get("/", (req, res) => {
  const courses = getCourse();
  res.status(200).send(courses);
});

// Ruta para el detalle de un curso
courseRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).send("Main route to get a single course: " + id);
});

// Ruta para postear un curso
courseRouter.post("/", (req, res) => {
  const {
    title,
    description,
    image,
    lenguage,
    price,
    duration,
    habilities,
    dificulty,
  } = req.body;

  res.status(200).send(`Main route to create a course with the following data:
        title: ${title}
        description: ${description}
        image: ${image}
        lenguage: ${lenguage}
        price: ${price}
        duration: ${duration}
        habilities: ${habilities}
        dificulty: ${dificulty}`);
});

module.exports = courseRouter;
