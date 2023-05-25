const {User,Buy,Course,Category} = require('../../database')
const {Op} = require('sequelize')

const trolleyGetControllers = async (iduser) =>{
    const newUsers = await Buy.findAll({
        where:{
            UserIdUser:iduser
        }
    })
    let cars = []

    for(let i=0;i<newUsers.length;i++){
        const {idCor} = newUsers[i]
        const response = await Course.findByPk(idCor,{
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
        })
        const {idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,
            dificulty,requirement,learnTo,studyMethod,asset,createdAt,updatedAt,Users,Categories} = response;
        
            const users = Users[0]
            const categories = Categories[0].name
        
            cars.push({idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,
            dificulty,requirement,learnTo,studyMethod,asset,createdAt,updatedAt,users,categories})
    }
    
    
    return cars

}
module.exports = trolleyGetControllers;