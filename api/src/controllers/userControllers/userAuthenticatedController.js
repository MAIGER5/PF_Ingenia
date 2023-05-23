const { User, Course } = require("../../database");
const userDataForm = require("../../helper/userDataForm");
const { tokenSingUp } = require("../../helper/tokenSingUp");
const bcryptjs = require("bcryptjs");

const userAuthenticated = async (email, password, userType) => {
  const loginUser = await User.findOne({ where: { email, Is: userType } });

  if (!loginUser) {
    throw Error("Lo sentimos, no se encontró el usuario especificado.");
  } else if (!loginUser.asset) {
    throw Error("Lo sentimos, no se encontró el usuario especificado.");
  }

  const passwordMatch = await bcryptjs.compare(password, loginUser.password);

  if (!passwordMatch) {
    throw Error(
      "La contraseña ingresada es incorrecta. Por favor, verifica tus datos e intenta nuevamente."
    );
  }

  const tokenSession = await tokenSingUp(loginUser);

  return { user: userDataForm(loginUser, tokenSession) };
};

module.exports = userAuthenticated;
