const dataUser = require("../harcodeo (borrar al final)/data");

const postUser = (name, lastName, password, email) => {
  //filtra por email unico.
  const searchedEmail = dataUser.find((user) => user.email === email);

  if (searchedEmail) {
    return "El usuario existe:";
  } else {
    //Esto es con fin de pruebas.
    const newUser = {
      name: name,
      lastName: lastName,
      password: password,
      email: email,
    };
    dataUser.push(newUser);
    //Con fines de prueba, con DB no seran enviados datos sencibles.
    return "El usuario ha sido creado correctamente", newUser;
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
