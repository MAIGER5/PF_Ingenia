const {User,Course} = require('../../database')

const createInstructor = async (name,lastname,email,password,studies)=>{
    console.log(name)
    const Is ='INSTRUCTOR';
    const newUser = await User.create({
        name,
        lastname,
        email,
        password,
        studies,
        Is,
        asset:true
    })
    return newUser;
}
module.exports = createInstructor;
