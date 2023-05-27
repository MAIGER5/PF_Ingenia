const { User } = require("../../../database");

const updateInfoUserController = async (
  idUser,
  name,
  lastname,
  imgProfile,
  description,
  studies,
  passwordHash
) => {
  const user = await User.findByPk(idUser);

  if (user) {
    const updateInfo = await User.update(
      {
        name,
        lastname,
        imgProfile,
        description,
        studies,
        password: passwordHash,
      },
      { where: { idUser } }
    );
    return { updateInfo, state: "Cambio actualizado" };
  } else {
    throw new Error("El usuario no se encuentra registrado");
  }
};

module.exports = updateInfoUserController;
