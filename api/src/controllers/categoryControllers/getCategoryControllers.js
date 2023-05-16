const {Category,Course} = require('../../database')

const getCategoryControllers = async ()=>{
    const response = await Category.findAll()
return response
}
module.exports = getCategoryControllers;

