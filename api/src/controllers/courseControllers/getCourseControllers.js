const { Course,User,Category } = require('../../database')
const { Op } = require('sequelize');

const getCourseControllers = async (page,size,title)=>{
    const coursesBase = await Course.findAll({
      include:[{
          model: User,
          attributes:["name","lastname"],
          through:{
              attributes:[],
          },
      },
      {
        model:Category,
        attributes:['name'],
        through:{
          attributes:[],
      },
      }
    ],
  })

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

    const courses = await Course.findAll(options,{
      include:[{
          model: User,
          attributes:["name","lastname"],
          through:{
              attributes:[],
          },
      },
      {
        model:Category,
        attributes:['name'],
        through:{
          attributes:[],
      },
      }
    ],
  });

  let response = []
    if(courses.length){
      return courses
    }else{
      for(let i=0;i<coursesBase.length;i++){
        const {
          idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,dificulty,
          requirement,learnTo,studyMethod,numberSales,asset,createdAt,updatedAt,Users,Categories
        } = coursesBase[i] // este hace referencia a todos los cursos sin ningun filtro
        const value = coursesBase[i].assessment
        const assessment = value / numberSales
        response.push({
          idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,dificulty,
          requirement,learnTo,studyMethod,numberSales,assessment,asset,createdAt,updatedAt,Users,Categories
        })
      }
      return response
    }

}
module.exports = getCourseControllers;
