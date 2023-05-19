const postUser = require("../../controllers/userControllers/userPostController");
const verifyUserExistence = require("../../helper/verifyUserExistence");
const bcryptjs = require("bcryptjs");

const userPostHandler = async (req, res) => {
  const { name, lastname, password, email } = req.body;

  try {
    //Definimos el rol, para verificaciones y creación.
    const Is = "STUDENT";
    //Verifica si el usuario tiene una cuenta creada con nosotros.
    await verifyUserExistence(email, Is);

    //hashea la contraseña
    const passwordHash = await bcryptjs.hash(password, 8);

    //logica del controller
    const user = await postUser(name, lastname, passwordHash, email, Is);

    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = userPostHandler;
