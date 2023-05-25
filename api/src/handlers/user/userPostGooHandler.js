const verifyUserExistence = require("../../helper/verifyUserExistence");
const userPostGoogleController = require("../../controllers/userControllers/userPostGoogleController");
const passwordRandom = require("../../helper/PasswordRandom");
const bcryptjs = require("bcryptjs");
const BienvenidaGoogle = require("../../utils/emailer/sendMail/BienvenidaGoogle");

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

    if (verify) {
      res.status(200).json(verify);
    } else {
      if (!verify) {
        if (!emailVerified) {
          throw new Error("Email no verificado");
        } else {
          const password = passwordRandom();
          console.log(password);
          const passwordHash = await bcryptjs.hash(password, 8);

          const user = await userPostGoogleController(
            displayName,
            email,
            passwordHash,
            photoURL,
            userType
          );
          user ? BienvenidaGoogle(email, displayName, password) : null;
          res.status(200).json(user);
        }
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message, loginVerification: false });
  }
};

module.exports = userPostGooHandler;
