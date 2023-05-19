const { verifyToken } = require("../helper/tokenSingUp");

const checkAuth = async (req, res, next) => {
  // Capturamos el token.
  // const token = res.header.authorization.split(" ").pop;
  const { token } = req.body;
  // Utilizamos nuestro handler para verificar el token.
  const tokenData = await verifyToken(token);

  console.log(tokenData);
  // Si no se encuentra unsuario envia un mensaje de error.
  if (!tokenData) {
    res
      .status(400)
      .json({
        error: "token invalido o no cuenta con los permisos necesarios",
      });
  } else {
    next();
  }
};

module.exports = checkAuth;
