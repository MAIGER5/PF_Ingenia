const verifyUserExistence = require("../../helper/verifyUserExistence");
const userPostGoogleController = require("../../controllers/userControllers/userPostGoogleController");
const passwordRandom = require("../../helper/PasswordRandom");
const bcryptjs = require("bcryptjs");

const userPostGooHandler = async (req, res) => {
  try {
    const {
      providerId,
      displayName,
      email,
      photoURL,
      emailVerified,
      userType,
    } = req.body;

    const verify = await verifyUserExistence(email, userType, providerId);
    const nameFormat = displayName.split(" ")[0];

    if (verify) {
      res.status(200).json(verify);
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
          res.status(200).json(user);
        }
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message, loginVerification: false });
  }
};

module.exports = userPostGooHandler;
