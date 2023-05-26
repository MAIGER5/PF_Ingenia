const { User } = require("../../database");

const userDeleteController = async (idUser, asset) => {
  if (asset) {
    const deleteUser = await User.update(
      { asset: false },
      {
        where: {
          idUser,
        },
      }
    );
    return { deleteUser };
  } else {
    const deleteUser = await User.update(
      { asset: true },
      {
        where: {
          idUser,
        },
      }
    );
    return { deleteUser };
  }
};

module.exports = userDeleteController;
