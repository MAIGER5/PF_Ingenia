const {User,Buy,Course} = require('../../database')
const trolleyControllers =async (idcuros,iduser)=>{

    const newUsers = await Buy.findAll({
        where:{
            UserIdUser:iduser
        }
    })

    const a = newUsers.find((obj)=> obj.idCor === parseInt(idcuros))

    if(!a){
        const idCor = idcuros
        const UserIdUser = iduser
        const carrito = await Buy.create({idCor,UserIdUser})
        // carrito.addUsers(iduser)
        return "added";
    }else{
        return "successfully added"
    }


}
module.exports = trolleyControllers;