const { User, Course } = require("../../database");
const userDataForm = require("../../helper/userDataForm");

const userPostGoogleController = async (
  nameFormat,
  email,
  passwordHash,
  photoURL,
  userType
) => {
  const newUser = await User.create({
    name: nameFormat,
    email,
    password: passwordHash,
    imgProfile: photoURL,
    Is: userType,
    asset: true,
  });

  return { user: userDataForm(newUser) };
};

module.exports = userPostGoogleController;
