const {Course,User,Category} = require('../../database')
const getCourseByIDControllers = async (id)=>{
    const response = await Course.findByPk(id,{
        include:[{
            model: User,
            attributes:["name","lastname","description","imgProfile","assessment"],
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
  
    if (!response) {
      return { message: 'Course not found' }
    }
  
  const {idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,
    dificulty,requirement,learnTo,studyMethod,asset,createdAt,updatedAt,Users,Categories} = response;

    const users = Users[0]
    const categories = Categories[0].name

  return {idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,
    dificulty,requirement,learnTo,studyMethod,asset,createdAt,updatedAt,users,categories}
}
module.exports = getCourseByIDControllers;
