const { User, Category, Course } = require("../../database");
const createCourse = require("../courseControllers/createCourse");

const categorias = require("./categorias");
const instructores = require("./instructores");
const cursos = require("./cursos");

const rellenarControllers = async () => {
  for (let i = 0; i < categorias.length; i++) {
    const name = categorias[i].name;
    const newCategory = await Category.create({ name });
  }
  for (let i = 0; i < instructores.length; i++) {
    const obj = instructores[i];
    const newInstr = await User.create(obj);
  }
  for (let i = 0; i < cursos.length; i++) {
    const {
      title,
      description,
      image,
      lenguage,
      price,
      pro,
      duration,
      content,
      dificulty,
      requirement,
      learnTo,
      studyMethod,
      users,
      catego,
    } = cursos[i];
    const newCurso = await createCourse(
      title,
      description,
      image,
      lenguage,
      price,
      pro,
      duration,
      content,
      dificulty,
      requirement,
      learnTo,
      studyMethod,
      users,
      catego
    );
  }

  return { Data: "Agregada" };
};
module.exports = rellenarControllers;
