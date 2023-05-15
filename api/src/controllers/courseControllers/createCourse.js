const {Course,User,Category} = require('../../database')

const createCourse = async (
    title,
    description,
    image,
    lenguage,
    price,
    pro,
    duration,
    content,
    dificulty,
    requirement,
    learnTo,
    studyMethod,
    users,
    catego
    )=>{

    const pricePro = price - (price * 0.3);
    // const assessment = 0;

    const newCourse = await Course.create({
        title,
        description,
        image,
        lenguage,
        price,
        pro,
        pricePro,
        duration,
        content,
        dificulty,
        requirement,
        learnTo,
        studyMethod,
        asset:true
    }); 
    newCourse.addUsers(users)
    newCourse.addCategories(catego)
    return newCourse;
}
module.exports = createCourse;



//   return res.status(201).json({ message: 'Course created'})