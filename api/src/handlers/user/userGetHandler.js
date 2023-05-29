const userGetController = require("../../controllers/userControllers/userGetController");

const userGetHandler = async (req, res) => {
  const { idUser } = req.params;

  try {
    const user = await userGetController(idUser);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = userGetHandler;
