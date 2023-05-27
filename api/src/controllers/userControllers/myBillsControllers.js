const {Bill,Course} = require('../../database')

const myBillsControllers = async (id)=>{
    const myBill = await Bill.findAll({
        where:{
            UserIdUser:id
        },
        include:[{
            model: Course,
            attributes:["title"],
            through:{
                attributes:[],
            },
        }]
    })
    return myBill
}
module.exports=myBillsControllers;