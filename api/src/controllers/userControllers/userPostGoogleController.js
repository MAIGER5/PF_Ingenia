const { User, Course } = require("../../database");
const userDataForm = require("../../helper/userDataForm");

const userPostGoogleController = async (
  name,
  lastname,
  email,
  passwordHash,
  photoURL,
  userType
) => {
  const newUser = await User.create({
    name,
    lastname,
    email,
    password: passwordHash,
    imgProfile: photoURL,
    Is: userType,
    asset: true,
  });

  return { user: userDataForm(newUser) };
};

module.exports = userPostGoogleController;
