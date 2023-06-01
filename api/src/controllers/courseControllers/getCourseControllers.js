const { Course,User,Category } = require('../../database')
const { Op } = require('sequelize');

const getCourseControllers = async (page,size,title)=>{
    const coursesBase = await Course.findAll({
      include:[{
          model: User,
          attributes:["idUser","name","lastname"],
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

  const courses = await Course.findAll({
    where:{
      title:{
      [Op.iLike]:`%${title}%` 
      }
    },
    include:[{
      model: User,
      attributes:["idUser","name","lastname"],
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
    }] 
  });

  let response = []
    if(courses.length){
      for(let i=0;i<courses.length;i++){
        const {
          idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,dificulty,
          requirement,learnTo,studyMethod,numberSales,asset,createdAt,updatedAt,Users,Categories
        } = courses[i] 
        const value = courses[i].assessment
        const assessment = value / numberSales
        response.push({
          idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,dificulty,
          requirement,learnTo,studyMethod,numberSales,assessment,asset,createdAt,updatedAt,Users,Categories
        })
      }
      return response  
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
