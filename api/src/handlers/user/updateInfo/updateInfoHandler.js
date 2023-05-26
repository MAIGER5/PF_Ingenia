const updateInfoController = require("../../../controllers/userControllers/updatedInfo/updateInfoUserController");

const updateInfoHandler = async (req, res) => {
  const { idUser, name, lastaname, password } = req.body;

  try {
    const userInfo = await updateInfoController(
      name,
      lastaname,
      password,
      idUser
    );
    if (userInfo[0] === 1) {
      res.status(200).json({ process: true });
    } else {
      throw new Error(
        "En este momento no podemos procesar tu solicitud, intentalo mas tardé"
      );
    }
  } catch (error) {
    res.status(400).json({ error: error.message, process: false });
  }
};

module.exports = updateInfoHandler;
