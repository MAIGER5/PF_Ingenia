const { User, Course } = require("../../database");
const userDataForm = require("../../helper/userDataForm");
const { tokenSingUp } = require("../../helper/tokenSingUp");
const bcryptjs = require("bcryptjs");

const userAuthenticated = async (email, password) => {
  const loginUser = await User.findOne({ where: { email } });

  if (!loginUser) {
    throw Error("Usuario no encontrado");
  }

  if (!loginUser.asset) {
    throw Error("Usuario no activo");
  }

  const passwordMatch = bcryptjs.compare(password, loginUser.password);

  if (!passwordMatch) {
    throw Error("Contraseña incorrecta");
  }

  const tokenSession = await tokenSingUp(loginUser);

  return { user: userDataForm(loginUser), tokenSession };
};

module.exports = userAuthenticated;
