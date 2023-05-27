const courseDeleteController = require("../../controllers/courseControllers/courseDeleteController");

const courseDeleteHandler = async (req, res) => {
  const { idCourse } = req.body;

  try {
    const course = await courseDeleteController(idCourse);
    const { state } = course;

    course.courseState[0]
      ? res.status(200).json({ state, process: true })
      : null;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = courseDeleteHandler;
