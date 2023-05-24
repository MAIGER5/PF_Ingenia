const {User,Buy,Course} = require('../../database')
const trolleyControllers =async (idcuros,iduser)=>{

    const newUsers = await Buy.findAll({
        where:{
            UserIdUser:iduser
        }
    })

    const a = newUsers.find((obj)=> obj.idCor === parseInt(idcuros))

    if(!a){
        const response = await Course.findByPk(idcuros,{
            include:[{
                model: User,
                attributes:["name","lastname"],
                through:{
                    attributes:[],
                },
            }
          ],
        })
        const {idCourse,title,description,image,price,pro,pricePro,Users}=response
        const userInstrucotor = Users[0].name + ' ' + Users[0].lastname
        const idCor = idCourse
        const UserIdUser = iduser
        const carrito = await Buy.create({idCor,title,description,image,price,pro,pricePro,userInstrucotor,UserIdUser})
        // carrito.addUsers(iduser)
        return carrito;
    }else{
        return "successfully added"
    }


}
module.exports = trolleyControllers;