const { User, Course } = require("../../database");
// const emailCourseDelete = require("../../utils/emailer/sendMail/courseDelete");

const courseDeleteController = async (idCourse) => {
  // const course = await Course.findByPk(idCourse);
  const course = await Course.findByPk(idCourse, {
    include: [
      {
        model: User,
        as: "Users",
        through: { attributes: [] }, // Excluye la tabla intermedia de la consulta
      },
    ],
  });

  const { title, createdAt } = course.dataValues;
  const { name, lastname, email } = course.Users[0].dataValues;

  const date = createdAt.toString().split("T")[0];

  if (course) {
    const newAsset = !course.asset;

    const courseState = await Course.update(
      { asset: newAsset },
      { where: { idCourse } }
    );

    if (!newAsset) {
      emailCourseDelete(name, lastname, email, title, date);
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
