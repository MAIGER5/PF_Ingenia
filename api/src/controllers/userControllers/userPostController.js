const { User, Course } = require("../../database");

const postUser = async (name, lastname, password, email) => {
  //Definimos su roll
  const Is = "STUDEN";
  //crea un nuevo usuario en la base de datos

  const newUser = await User.create({
    name,
    lastname,
    email,
    password,
    Is,
    asset: true,
  });
  return newUser;
};

module.exports = postUser;
