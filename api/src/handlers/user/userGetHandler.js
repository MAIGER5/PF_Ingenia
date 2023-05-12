const postUser = require("../../controllers/userControllers/postUser");

const userGetHandler = (req, res) => {
  const { name, lastName, password, email } = req.body;
  try {
    const user = postUser(name, lastName, password, email);
    res.status(200).send(user);
  } catch (error) {}
};

module.exports = userGetHandler;
