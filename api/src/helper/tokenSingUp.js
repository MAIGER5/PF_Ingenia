const jwt = require("jsonwebtoken");

const tokenSingUp = async (user) => {
  try {
    return jwt.sign(
      {
        id: user.idUser,
        role: user.Is,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
  } catch (error) {
    return null;
  }
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSingUp, verifyToken };
