const {User} = require('../../database')
const userGetControllers = async ()=>{
    const response = await User.findAll()
    return response
}
module.exports=userGetControllers;