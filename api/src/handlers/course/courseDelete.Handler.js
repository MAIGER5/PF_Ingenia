const courseDeleteController = require("../../controllers/courseControllers/courseDeleteController");

const courseDeleteHandler = async (req, res) => {
  const { idCourse, asset } = req.body;

  try {
    const course = await courseDeleteController(idCourse, asset);
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = courseDeleteHandler;
