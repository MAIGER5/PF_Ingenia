const {favoritePost,favoriteGet,favoriteDelete} = require('../../controllers/userControllers/favoriteControllers')

const favoritePostHandlers = async (req,res) =>{
    const {idUser,idCourse} = req.query
    try {
        const response = await favoritePost(idUser,idCourse)
        res.status(200).json(response)        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const favoriteGetHandlers = async (req,res)=>{
    const {id} = req.params
    try {
        const response = await favoriteGet(id);
        res.status(200).json(response) 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const favoriteDeleteHandlers = async (req,res)=>{
    const {idUser,idCourse} = req.query
    try {
        const response = await favoriteDelete(idUser,idCourse)
        res.status(200).json(response) 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports={
    favoritePostHandlers,
    favoriteGetHandlers,
    favoriteDeleteHandlers
}