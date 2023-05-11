const dataUser = require("../harcodeo (borrar al final)/data");
const bcryptjs = require("bcryptjs");

const postUser = async (name, lastName, password, email) => {
  // filtra por email único
  const searchedEmail = dataUser.find((user) => user.email === email);

  if (searchedEmail) {
    return "El usuario existe:";
  } else {
    try {
      // hashea la contraseña
      const passwordHash = await bcryptjs.hash(password, 8);
      // crea el usuario
      const newUser = {
        name: name,
        lastName: lastName,
        password: passwordHash,
        email: email,
      };
      dataUser.push(newUser);
      // retorna el usuario creado
      return {
        message: "El usuario ha sido creado correctamente",
        newUser: newUser,
      };
    } catch (error) {
      console.log(error);
      return "Ha ocurrido un error al crear el usuario";
    }
  }
};

module.exports = postUser;

// Datos de ejemplo para crear un usuario.

// {
//   "name": "Juan",
//   "lastName": "Pérez",
//   "password": "david08",
//   "email": "jasddn@gmail.com"
// }
