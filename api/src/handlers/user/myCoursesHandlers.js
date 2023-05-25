const myCoursesControllers = require('../../controllers/userControllers/myCoursesControllers')
const myBillsControllers = require('../../controllers/userControllers/myBillsControllers')
const myCoursesHandlers= async (req,res)=>{
    const {id} = req.params
    try {
        const response = await myCoursesControllers(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const myBillsHandlers = async (req,res)=>{
    const {id} = req.params
    try {
        const response = await myBillsControllers(id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports={
    myCoursesHandlers,
    myBillsHandlers
}