const {Buy} = require('../../database')
const deleteCarritoControllers =(curso,user)=>{
    Buy.destroy({
        where:{
            idBuy:curso,
            UserIdUser:user
        }
    })
    return 'eliminado con excito'

}
module.exports=deleteCarritoControllers;