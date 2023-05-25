const { User } = require("../../database");
const userDataForm = require("../../helper/userDataForm");

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
  return { user: userDataForm(deleteUser) };
};

module.exports = userDeleteController;
