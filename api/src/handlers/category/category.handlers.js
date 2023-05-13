const getCategoryControllers = require('../../controllers/categoryControllers/getCategoryControllers')
const postCategoryControllers = require('../../controllers/categoryControllers/postCategoryControllers')
const categoryHandlers = async (req,res)=>{
    try {
        const response = await getCategoryControllers();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const posCategoryControllers = async (req,res)=>{
    const {name} = req.body
    try {
        const response = await postCategoryControllers(name);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports={
    categoryHandlers,
    posCategoryControllers
}