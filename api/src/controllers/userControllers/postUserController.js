const { User, Course } = require("../../database");

const postUser = async (name, lastname, password, email) => {
  console.log(`4, ${(name, lastname, password, email)}`);
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

// Datos de ejemplo para crear un usuario.

// {
//   "name": "Juan",
//   "lastName": "Pérez",
//   "password": "david08",
//   "email": "jasddn@gmail.com"
// }
