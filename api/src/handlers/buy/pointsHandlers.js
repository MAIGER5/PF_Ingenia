const assignPointViewControllers = require('../../controllers/buy/points/assignPointViewControllers')
const assignPointsControllers = require('../../controllers/buy/points/assignPointsControllers')
const assignPointsViewHandlers = async (req,res)=>{
    const {id} = req.params
    try {
        const response = await assignPointViewControllers(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}

const assignPointsHandlers = async (req,res)=>{
    const {user,course,comement,assessment} = req.body
    try {
        const response = await assignPointsControllers(user,course,comement,assessment)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}

module.exports={
    assignPointsViewHandlers,
    assignPointsHandlers
}