const { User } = require("../../../database");

const updateInfoUserController = async (name, lastname, password, idUser) => {
  const updateInfo = await User.update(
    { name, lastname, password },
    { where: { idUser } }
  );

  return updateInfo;
};

module.exports = updateInfoUserController;
