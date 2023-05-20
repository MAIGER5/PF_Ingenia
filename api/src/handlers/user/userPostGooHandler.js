const verifyUserExistence = require("../../helper/verifyUserExistence");
const userPostGoogleController = require("../../controllers/userControllers/userPostGoogleController");
const passwordRandom = require("../../helper/PasswordRandom");
const bcryptjs = require("bcryptjs");

const userPostGooHandler = async (req, res) => {
  try {
    const { displayName, email, photoURL, emailVerified, userType } = req.body;

    const verify = await verifyUserExistence(email, userType);
    const nameFormat = displayName.split(" ")[0];

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
        res.status(200).json({ user, loginVerification: true });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message, loginVerification: false });
  }
};

module.exports = userPostGooHandler;
