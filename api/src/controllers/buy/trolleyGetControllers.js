const {User,Buy} = require('../../database')
const {Op} = require('sequelize')

const trolleyGetControllers = async (iduser) =>{
    const newUsers = await Buy.findAll({
        where:{
            UserIdUser:iduser
        }
    })
    return newUsers
}
module.exports = trolleyGetControllers;