const { User } = require("../../database");

const userDeleteController = async (email, userType) => {
  const deleteUser = await User.update(
    { asset: false },
    {
      where: {
        email,
        Is: userType,
      },
    }
  );
  return { user: deleteUser };
};

module.exports = userDeleteController;
