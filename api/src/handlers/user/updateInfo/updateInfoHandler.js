const updateInfoController = require("../../../controllers/userControllers/updatedInfo/updateInfoUserController");
const { cloudinary } = require("../../../utils/cloudinary.js");
const bcrypt = require("bcryptjs");

const updateInfoHandler = async (req, res) => {
  const { idUser, name, lastname, imgProfile, description, studies, password } =
    req.body;
  try {
    if (password && imgProfile) {
      // Actualizar tanto el password como la imagen de perfil
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
      // Actualizar solo el password
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
      // Actualizar solo la imagen de perfil
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
            password
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
