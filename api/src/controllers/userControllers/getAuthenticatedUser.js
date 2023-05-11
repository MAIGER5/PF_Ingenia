const { User, Course } = require("../../database");

const getAuthenticatedUser = async (email, password) => {
  const newUser = await User.create({
    name,
    lastname,
    email,
    password,
    studies,
    Is,
    asset: true,
  });
  return newUser;
};

module.exports = getAuthenticatedUser;
