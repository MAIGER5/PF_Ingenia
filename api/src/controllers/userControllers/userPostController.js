const { User, Course } = require("../../database");
const userDataForm = require("../../helper/userDataForm");

const postUser = async (name, lastname, password, email, Is) => {
  //crea un nuevo usuario en la base de datos
  const newUser = await User.create({
    name,
    lastname,
    email,
    password,
    Is,
    asset: true,
  });
  return { user: userDataForm(newUser) };
};

module.exports = postUser;
