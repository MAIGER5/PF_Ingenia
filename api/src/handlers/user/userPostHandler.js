const postUser = require("../../controllers/userControllers/userPostController");
const bcryptjs = require("bcryptjs");

const userPostHandler = async (req, res) => {
  const { name, lastname, password, email } = req.body;

  try {
    //hashea la contraseña
    const passwordHash = await bcryptjs.hash(password, 8);

    //logica del controller
    const user = await postUser(name, lastname, passwordHash, email);

    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: "El usuario ya existe" });
  }
};

module.exports = userPostHandler;
