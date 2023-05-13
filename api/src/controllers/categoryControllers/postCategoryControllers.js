const {Category} = require('../../database')

const postCategoryControllers = async (name)=>{
    const response = await Category.create({name})
    return response
}
module.exports =  postCategoryControllers;