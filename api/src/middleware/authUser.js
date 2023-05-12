const { verifyToken } = require("../helper/tokenSingUp");

const checkAuth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ").pop();
  const tokenData = await verifyToken(token);
  //   console.log(tokenData);
  if (tokenData.id) {
    next();
  } else {
    throw Error({ error: "no cuenta con los permisos necesarios" });
  }
};

module.exports = checkAuth;
