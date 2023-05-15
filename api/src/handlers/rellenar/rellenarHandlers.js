const rellenarControllers = require('../../controllers/rellenarControllers/rellenarControllers')
const rellenarHandlers = async (req,res)=>{
    try {
        const response = await rellenarControllers()
        res.status(200).json(response)
    } catch (error) {
        
    }
}
module.exports = {
    rellenarHandlers
};