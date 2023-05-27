const { Course } = require("../../database");

const courseDeleteController = async (idCourse) => {
  const course = await Course.findByPk(idCourse);

  if (course) {
    if (course.asset) {
      const courseState = await Course.update(
        { asset: false },
        { where: { idCourse } }
      );
      return courseState;
    } else {
      const courseState = await Course.update(
        { asset: true },
        { where: { idCourse } }
      );
      return courseState;
    }
  }
  throw new Error(
    "Lo sentimos no a sido posible encontrar el curso especificado"
  );
};

module.exports = courseDeleteController;
