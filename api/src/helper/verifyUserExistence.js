const { User } = require("../database");

const verifyUserExistence = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    throw new Error("Ya existe una cuenta asociada a este usuario.");
  }
  return user;
};

module.exports = verifyUserExistence;
