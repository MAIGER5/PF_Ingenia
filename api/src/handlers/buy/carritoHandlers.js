const trolleyControllers = require('../../controllers/buy/trolleyControllers')
const trolleyGetControllers = require('../../controllers/buy/trolleyGetControllers')
const deleteCarritoControllers = require('../../controllers/buy/deleteCarritoControllers')
const carritoHandlers = async (req,res)=>{
    const {idCourse,idUser} = req.query
    try {
        const response = await trolleyControllers(idCourse,idUser);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const carritoGetHandlers = async (req,res)=>{
    const { id } = req.params 
    try {
        const response = await trolleyGetControllers(id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteCarritoHandlers = async (req,res)=>{
    const {idCourse,idUser} = req.query
try {
    const response = await deleteCarritoControllers(idCourse,idUser)
    res.status(200).json(response)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

module.exports = {
    carritoHandlers,
    carritoGetHandlers,
    deleteCarritoHandlers
};