const { Course } = require("../../database");

const courseDeleteController = async (idCourse) => {
  const course = await Course.findByPk(idCourse);

  if (course) {
    const newAsset = !course.asset;

    const courseState = await Course.update(
      { asset: newAsset },
      { where: { idCourse } }
    );

    if (!newAsset) {
      return { courseState, state: "Deshabilitado" };
    } else {
      return { courseState, state: "Habilitado" };
    }
  }
  throw new Error(
    "Lo sentimos no a sido posible encontrar el curso especificado"
  );
};

module.exports = courseDeleteController;
