const {User,Buy,Course} = require('../../database')
const trolleyControllers = (idCourse,idUser)=>{
    return idCourse + idUser
}
module.exports = trolleyControllers;