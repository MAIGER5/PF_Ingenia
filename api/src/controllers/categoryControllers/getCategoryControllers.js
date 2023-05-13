const {Category,Course} = require('../../database')

const getCategoryControllers = async ()=>{
    const response = await Category.findAll({
        include:{
            model: Course,
            attributes:["title"],
            through:{
               attributes:[]
            }
         }
    })
return response
}
module.exports = getCategoryControllers;