const {Category,Course,User} = require('../../database')

const getCategoryByIdControllers = async (id)=>{
    const response = await Category.findByPk(id,{
        include:{
            model: Course,
            attributes:["title","description","image","price","dificulty"],
            through:{
               attributes:[]
            },
            include:{
                model: User,
                attributes:["name"],
                through:{
                   attributes:[]
                },
             }
         }
    })
    
    return response
}
module.exports = getCategoryByIdControllers;