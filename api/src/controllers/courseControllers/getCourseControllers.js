const { Course,User,Category } = require('../../database')
const { Op } = require('sequelize');

const getCourseControllers = async (page,size,title)=>{
    const coursesBase = await Course.findAll()

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

    const courses = await Course.findAll(options);

    if(courses.length){
        return courses
    }else{
        return coursesBase
    }

    // courses.length ? courses : coursesBase
}
module.exports = getCourseControllers;