const { User } = require("../database");
const userDataForm = require("../helper/userDataForm");

const verifyUserExistence = async (email, userType, providerId) => {
  const user = await User.findOne({ where: { email, Is: userType } });

  if (user) {
    console.log(user);
    if (user.dataValues.asset) {
      if (providerId === "google.com") {
        return { user: userDataForm(user) };
      } else {
        throw new Error("Ya existe una cuenta asociada a este usuario.");
      }
    }
  }
  return user;
};

module.exports = verifyUserExistence;
