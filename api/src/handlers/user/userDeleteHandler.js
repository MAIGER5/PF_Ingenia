const userDeleteController = require("../../controllers/userControllers/userDeleteController");

const userDeleteHandler = async (req, res) => {
  try {
    const { idUser } = req.body;

    const userDelete = await userDeleteController(idUser);

    const { state } = userDelete;

    userDelete.userState[0]
      ? res.status(200).json({ state, process: true })
      : null;
  } catch (error) {
    res.status(400).json({ error: error.message, process: false });
  }
};

module.exports = userDeleteHandler;
