const users = require("../harcodeo (borrar al final)/User");
const courses = require("../harcodeo (borrar al final)/cursos");

const getCourse = (id) => {
  const user = users.filter((userId) => userId.IdUsuario == Number(id));
  return user;
};

module.exports = getCourse;
