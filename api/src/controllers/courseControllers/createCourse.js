const {Course,User,Category} = require('../../database')

const createCourse = async (title,description,image,lenguage,price,duration,habilities,
    dificulty,IdUser,Category,requirement,users,category)=>{

    const pricePro = price - (price * 0.2);
    const newCourse = await Course.create({
        title,
        description,
        image,lenguage,
        price,
        pricePro,
        duration,
        habilities,
        dificulty,
        requirement,
        asset:true
    }); 
    newCourse.addUsers(users)
    newCourse.addCategories(category)
    return newCourse;
}
module.exports = createCourse;



//   return res.status(201).json({ message: 'Course created'})