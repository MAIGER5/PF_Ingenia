const cursos = require("../harcodeo (borrar al final)/cursos");

const getCourse = async (req, res) => {
  try {
    const courses = cursos;
    const { title } = req.query;

    if (!title) return res.status(202).send(courses);

    const course = courses.filter(
      (course) => course.title.toLowerCase() === title.toLowerCase()
    );

    if (course.length === 0)
      return res.status(404).send({ message: "Course not found" });

    return res.status(200).send(course);
  } catch (error) {}
};

const getCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const courses = cursos;

    let mapeoDeCursos = courses.find((course) => course.IdCurso == id);

    // NOS SÉ QUE NO ESTA FUNCIONANDO AQUÍ
  } catch (error) {
    console.error(error);
    return res.status(404).json({ msg: "Failed to get course" });
  }
};

const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      lenguage,
      price,
      pricePro,
      duration,
      habilities,
      dificulty,
      asset,
    } = req.body;

    // Esto va ser cuando usemos los modelos solo que con await y el .Create
    // const course = new Model.Create()

    const newCourse = {
      title,
      description,
      image,
      lenguage,
      price,
      pricePro,
      duration,
      habilities,
      dificulty,
      asset,
    };

    // Aañadir las propiedades de quien lo vende, etc.

    cursos.push(newCourse);

    return res.status(200).json({ newCourse });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "Failed to create course", error });
  }
};

module.exports = { getCourse, getCourseByID, createCourse };
