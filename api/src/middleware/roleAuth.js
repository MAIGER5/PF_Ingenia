const { verifyToken } = require("../helper/tokenSingUp");
const { User } = require("../database");

const checkRoleAuth = (roles) => async (req, res, next) => {
  const token = req.headers.authorization.split(" ").pop();
  const tokenData = await verifyToken(token);
  const userData = await User.findByPk(tokenData.id);

  if ([].concat(roles).includes(userData.Is)) {
    next();
  } else {
    throw Error({ error: "no cuenta con los permisos necesarios" });
  }
};

module.exports = checkRoleAuth;
