const {Course,User,Category} = require('../../database')
const getCourseByIDControllers = async (id)=>{
    const ad = await Course.findByPk(id,{
        include:[{
            model: User,
            attributes:["name","description","imgProfile","assessment"],
            through:{
                attributes:[],
            },
        },
        {
          model:Category,
          attributes:['name'],
          through:{
            attributes:[],
        },
        }
      ],
    });
  
      if (!ad) {
        return { message: 'Course not found' }
      }
  
      return ad
}
module.exports = getCourseByIDControllers;