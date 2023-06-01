const {Course,User,Category} = require('../../database')
const getCourseByIDControllers = async (id)=>{
    const response = await Course.findByPk(id,{
        include:[{
            model: User,
            attributes:["idUser","name","lastname","description","imgProfile","numberSales","assessment",],
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
    dificulty,requirement,learnTo,studyMethod,numberSales,asset,createdAt,updatedAt,Users,Categories} = response;
    
    //para el curos
    const valueCourses = response.assessment
    const assessment = valueCourses / numberSales

    const categories = Categories[0].name

    // para el usuario
    const {idUser,name,lastname,imgProfile} = Users[0]
    const descriUser = Users[0].description
    const valueUser = Users[0].assessment
    const cantidadVenta = Users[0].numberSales

    const valorReal = valueUser / cantidadVenta

  return {idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,
    dificulty,requirement,learnTo,studyMethod,numberSales,assessment,asset,createdAt,updatedAt,
    users:{
      idUser,
      name,
      lastname,
      description:descriUser,
      imgProfile,
      numberSales:cantidadVenta,
      assessment:valorReal
    },
    categories}
}
module.exports = getCourseByIDControllers;
