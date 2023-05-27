const { User } = require("../../database");

const userDeleteController = async (idUser) => {
  const user = await User.findByPk(idUser);

  if (user) {
    const newAsset = !user.asset;

    const userState = await User.update(
      { asset: newAsset },
      {
        where: {
          idUser,
        },
      }
    );
    if (!newAsset) {
      return { userState, state: "Deshabilitado" };
    } else {
      return { userState, state: "Habilitado" };
    }
  }
  throw new Error("El usuario no se encuentra registrado");
};

module.exports = userDeleteController;
