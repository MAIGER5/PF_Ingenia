const { User } = require("../../database");

const userDeleteController = async (idUser) => {
  const user = await User.findByPk(idUser);

  if (user) {
    if (user.asset) {
      const userState = await User.update(
        { asset: false },
        {
          where: {
            idUser,
          },
        }
      );
      return { userState, state: "Deshabilitado" };
    } else {
      const userState = await User.update(
        { asset: true },
        {
          where: {
            idUser,
          },
        }
      );
      return { userState, state: "Habilitado" };
    }
  }
  throw new Error("El usuario no se encuentra registrado");
};

module.exports = userDeleteController;
