const { User } = require("../../database");

const updateInfoUserController = (name, lastname, password, userType) => {
  const updateInfo = User.update(
    { name, lastname, password },
    { where: { name, Is: userType } }
  );
  return updateInfo;
};

module.exports = updateInfoUserController;
