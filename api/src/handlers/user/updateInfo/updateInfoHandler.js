const updateInfoController = require("../../../controllers/userControllers/updatedInfo/updateInfoUserController");
const { cloudinary } = require("../../../utils/cloudinary.js");
const bcrypt = require("bcryptjs");
const { validateUpdate } = require("../../../utils/validators/userUpdate");

const updateInfoHandler = async (req, res) => {
  const { idUser, name, lastname, imgProfile, description, studies, password } =
    req.body;
  try {
    if (password && imgProfile) {
      validateUpdate(password);
      const passwordHash = await bcrypt.hash(password, 8);
      if (imgProfile.length > 150) {
        const uploadImage = await cloudinary.uploader.upload(imgProfile, {
          upload_preset: "ingenia",
        });

        if (uploadImage) {
          const userInfo = await updateInfoController(
            idUser,
            name,
            lastname,
            uploadImage,
            description,
            studies,
            passwordHash
          );
          const { state } = userInfo;
          userInfo.updateInfo[0]
            ? res.status(200).json({ state, process: true })
            : null;
        }
      }
    } else if (password) {
      validateUpdate(password);
      const passwordHash = await bcrypt.hash(password, 8);
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
    } else if (imgProfile) {
      if (imgProfile.length > 150) {
        const uploadImage = await cloudinary.uploader.upload(imgProfile, {
          upload_preset: "ingenia",
        });

        if (uploadImage) {
          const userInfo = await updateInfoController(
            idUser,
            name,
            lastname,
            uploadImage,
            description,
            studies
          );
          const { state } = userInfo;
          userInfo.updateInfo[0]
            ? res.status(200).json({ state, process: true })
            : null;
        }
      }
    } else {
      const userInfo = await updateInfoController(
        idUser,
        name,
        lastname,
        imgProfile,
        description,
        studies
      );
      const { state } = userInfo;

      userInfo.updateInfo[0]
        ? res.status(200).json({ state, process: true })
        : null;
    }
  } catch (error) {
    res.status(400).json({ error: error.message, process: false });
  }
};

module.exports = updateInfoHandler;
