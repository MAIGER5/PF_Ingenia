const data = require("../harcodeo (borrar al final)/data");
const courses = require("../harcodeo (borrar al final)/cursos");

const getAuthenticatedUser = (email, password) => {
  const user = data.find((userEmail) => userEmail.email === email);

  if (!user) {
    return "Correo electronico o contraseña invalidas";
  } else {
    return "usuario logueado";
  }
};

module.exports = getAuthenticatedUser;
