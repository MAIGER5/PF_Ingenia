const verifyUserExistence = require("../../helper/verifyUserExistence");
const userDeleteController = require("../../controllers/userControllers/userDeleteController");

const userDeleteHandler = async (req, res) => {
  try {
    const { email, userType } = req.body;

    const userDelete = await userDeleteController(email, userType);

    userDelete ? res.status(200).json(userDelete) : null;
  } catch (error) {
    res.status(400).json({ error: error.message, loginVerification: false });
  }
};

module.exports = userDeleteHandler;
