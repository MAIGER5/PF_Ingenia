const trolleyControllers = require('../../controllers/buy/trolleyControllers')
const carritoHandlers = async (req,res)=>{
    const {idCourse,idUser} = req.query
    try {
        const response = trolleyControllers(idCourse,idUser);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = {
    carritoHandlers
};