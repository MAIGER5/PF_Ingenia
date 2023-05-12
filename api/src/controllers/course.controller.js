const { Course } = require('../database')

const { Op } = require('sequelize')

const getCourse = async (req, res) => {
  try {

    const coursesBase = await Course.findAll()
    const {
      page = 0,
      size = 20,
      title,
      // sort,
    } = req.query;

    const options = {
      limit: +size,
      offset: +page * +size,
      where: { title: '' },
      order: [['createdAt', 'DESC']],
    };

    if (title) {
      options.where.title = {
        [Op.iLike]: `%${title}%`,
      };
    }
 
    // Por el momento los filtros en el back

    // if (sort === 'priceAsc') {
    //   options.order = [['price', 'ASC']];
    // } else if (sort === 'priceDesc') {
    //   options.order = [['price', 'DESC']];
    // } else if (sort === 'titleAsc') {
    //   options.order = [['title', 'ASC']];
    // } else if (sort === 'titleDesc') {
    //   options.order = [['title', 'DESC']];
    // }

    const courses = await Course.findAll(options);

    courses.length ? res.status(202).send(courses) : res.status(202).send(coursesBase)
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: 'Failed to retrieve/get the data.' });
  }
};

const getCourseByID = async (req, res) => {
  try {
    const { id } = req.params;

    const ad = await Course.findByPk(id);

    if (!ad) {
      return res.status(404).json({ message: 'Course not found' });
    }

    return res.status(200).json(ad);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Failed to retrieve the data' });
  }
};

const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      lenguage,
      price,
      pricePro,
      duration,
      habilities,
      dificulty,
      asset,
    } = req.body;

    // Esto va ser cuando usemos los modelos solo que con await y el .Create
    // const course = new Model.Create()
    // Aañadir las propiedades de quien lo vende, etc.

    const course = await Course.create({
      title,
      description,
      image,
      lenguage,
      price,
      pricePro,
      duration,
      habilities,
      dificulty,
      asset,
    }); 

    // console.log(course.dataValues) 
    return res.status(201).json({ message: 'Course created'})
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "Failed to create course", error });
  }
};

module.exports = { getCourse, getCourseByID, createCourse };
