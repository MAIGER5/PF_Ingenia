const { User } = require("../../database");
const userDataForm = require("../../helper/userDataForm");

const userGetController = async (idUser) => {
  const user = await User.findByPk(idUser);

  if (!user) {
    throw new Error("Usuario no existente");
  } else {
    return userDataForm(user);
  }
};

module.exports = userGetController;
