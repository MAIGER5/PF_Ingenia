const createCourse = require('../../controllers/courseControllers/createCourse')
const getCourseControllers = require('../../controllers/courseControllers/getCourseControllers')
const getCourseByIDControllers = require('../../controllers/courseControllers/getCourseByIDControllers')

const getCourseHandlers = async (req, res) => {
  const {page = 0,size = 20,title} = req.query;
  try {
    const response = await getCourseControllers(page,size,title)
    res.status(200).json(response)
  } catch (error) {
    return res
      .status(400).json({ message: 'Failed to retrieve/get the data.' });
  }
};

const getCourseByIDHandlers = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getCourseByIDControllers(id);
    res.status(200).json(response)
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Failed to retrieve the data' });
  }
};

const createCourseHandlers = async (req, res) => {
  const {    
    title,
    description,
    image,
    lenguage,
    price,
    pro,
    duration,
    content,
    dificulty,
    requirement,
    learnTo,
    studyMethod,
    users,
    catego} = req.body;
  try {
    const response = await createCourse(
      title,
      description,
      image,
      lenguage,
      price,
      pro,
      duration,
      content,
      dificulty,
      requirement,
      learnTo,
      studyMethod,
      users,
      catego
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "Failed to create course", error });
  }
};

module.exports = { getCourseHandlers, getCourseByIDHandlers, createCourseHandlers };
