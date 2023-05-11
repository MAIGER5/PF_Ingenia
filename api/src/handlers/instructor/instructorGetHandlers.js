const createInstructor = require('../../controllers/instructorControllers/createInstructor')

const instructorGetHandlers = (req,res)=>{
    res.json({hola:'perro'})
}
const instructorPostHandlers = async (req,res)=>{
    const {name,lastname,email,password,studies} = req.body
    try {
        console.log('entro la primera')
        const response = await createInstructor(name,lastname,email,password,studies)
        res.set(200).json(response)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    instructorGetHandlers,
    instructorPostHandlers
}
