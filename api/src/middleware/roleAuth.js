const { verifyToken } = require("../helper/tokenSingUp");
const { User } = require("../database");

const checkRoleAuth = (roles) => async (req, res, next) => {
  // Capturamos el token.
  // const token = res.header.authorization.split(" ").pop;
  const { token } = req.body;
  // Utilizamos nuestro handler para verificar el token.
  const tokenData = await verifyToken(token);
  //Buscamos en la base de datos el usuario por el id que tenemos en jwt.
  const userData = await User.findByPk(tokenData.id);

  //capturamos el rol de userData y verificamos que ese role este incluido en el array de la ruta.
  if ([].concat(roles).includes(userData.Is)) {
    next();
  } else {
    res
      .status(400)
      .json({
        error: "token invalido o no cuenta con los permisos necesarios",
      });
  }
};

module.exports = checkRoleAuth;
