const { Course } = require("../../database");

const courseDeleteController = async (idCourse, asset) => {
  if (asset) {
    const updateInfo = await Course.update(
      { asset: false },
      { where: { idCourse } }
    );
    return updateInfo;
  } else {
    const updateInfo = await Course.update(
      { asset: true },
      { where: { idCourse } }
    );
    return updateInfo;
  }
};

module.exports = courseDeleteController;
