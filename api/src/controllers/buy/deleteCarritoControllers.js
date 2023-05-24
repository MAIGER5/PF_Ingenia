const {Buy} = require('../../database')
const deleteCarritoControllers =(curso,user)=>{
    Buy.destroy({
        where:{
            idCor:curso,
            UserIdUser:user
        }
    })
    return 'successfully removed'

}
module.exports=deleteCarritoControllers;