const updateInfoController = require("../../../controllers/userControllers/updatedInfo/updateInfoUserController");
const bcrypt = require("bcryptjs");

const updateInfoHandler = async (req, res) => {
  const { idUser, name, lastname, imgProfile, description, studies, password } =
    req.body;

  const passwordHash = await bcrypt.hash(password, 8);

  try {
    const userInfo = await updateInfoController(
      idUser,
      name,
      lastname,
      imgProfile,
      description,
      studies,
      passwordHash
    );

    const { state } = userInfo;

    userInfo.updateInfo[0]
      ? res.status(200).json({ state, process: true })
      : null;
  } catch (error) {
    res.status(400).json({ error: error.message, process: false });
  }
};

module.exports = updateInfoHandler;
