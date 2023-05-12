const userAuthenticated = require("../../controllers/userControllers/userAuthenticatedController");

const postUserAuthenticated = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const loginUser = await userAuthenticated(email, password);
    res.status(200).json(loginUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postUserAuthenticated;
