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
        cars.push(response)
    }
    
    
    return cars

}
module.exports = trolleyGetControllers;