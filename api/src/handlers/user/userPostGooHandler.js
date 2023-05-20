const verifyUserExistence = require("../../helper/verifyUserExistence");
const userPostGoogleController = require("../../controllers/userControllers/userPostGoogleController");
const passwordRandom = require("../../helper/PasswordRandom");
const bcryptjs = require("bcryptjs");

const userPostGooHandler = async (req, res) => {
  try {
    const { displayName, email, photoURL, login, emailVerified, userType } =
      req.body;

    const verify = await verifyUserExistence(email, userType);
    const nameFormat = displayName.split(" ")[0];

    if (login) {
      if (verify) {
        // Usuario existe, realizar alguna acción
        // por ejemplo, obtener información del usuario
        // y enviarla como respuesta

        res.status(200).json("verify");
      } else {
        res.status(404).json({ error: "Usuario no encontrado" });
      }
    } else {
      if (!verify) {
        if (!emailVerified) {
          throw new Error("Email no verificado");
        } else {
          const password = passwordRandom();
          const passwordHash = await bcryptjs.hash(password, 8);

          const user = await userPostGoogleController(
            nameFormat,
            email,
            passwordHash,
            photoURL,
            userType
          );
          res.status(200).json({ user });
        }
      } else {
        res.status(400).json({ error: "El usuario ya existe" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message, loginVerification: false });
  }
};

module.exports = userPostGooHandler;
