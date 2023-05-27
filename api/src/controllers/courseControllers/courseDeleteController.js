const { Course, User, sequelize } = require("../../database");

const courseDeleteController = async (idCourse) => {
  const course = await Course.findByPk(idCourse);

  if (course) {
    // Obtener los usuarios asociados al curso
    const users = await course.getUsers();

    if (users && users.length > 0) {
      // Actualizar la propiedad 'asset' para cada relación UserCourse
      const promises = users.map((user) =>
        user.UserCourse.update(
          { asset: false },
          { where: { CourseIdCourse: idCourse } }
        )
      );

      // Ejecutar todas las actualizaciones en paralelo
      await Promise.all(promises);

      return true;
    } else {
      throw new Error("El curso no está asociado a ningún usuario");
    }
  }

  throw new Error("No se encontró el curso especificado");
};

module.exports = courseDeleteController;
