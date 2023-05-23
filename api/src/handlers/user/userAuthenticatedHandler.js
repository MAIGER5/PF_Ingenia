const userAuthenticated = require("../../controllers/userControllers/userAuthenticatedController");

const postUserAuthenticated = async (req, res) => {
  const { email, password, userType } = req.body;

  try {
    const loginUser = await userAuthenticated(email, password, userType);
    res.status(200).json(loginUser);
  } catch (error) {
    res.status(400).json({ error: error.message, loginVerification: false });
  }
};

module.exports = postUserAuthenticated;
