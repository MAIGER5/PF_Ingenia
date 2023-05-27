const userDeleteController = require("../../controllers/userControllers/userDeleteController");

const userDeleteHandler = async (req, res) => {
  try {
    const { idUser } = req.body;

    const userDelete = await userDeleteController(idUser);

    if (userDelete.userState[0] === 1) {
      const { state } = userDelete;
      res.status(200).json({ state, process: true });
    } else {
      throw new Error(
        "En este momento no podemos procesar tu solicitud, intentalo mas tardé"
      );
    }
  } catch (error) {
    res.status(400).json({ error: error.message, process: false });
  }
};

module.exports = userDeleteHandler;
