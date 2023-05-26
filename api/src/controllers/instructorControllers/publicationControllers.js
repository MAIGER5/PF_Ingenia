const {User,Publication} = require('../../database')

const publicationControllers = async (idUser,title,subtitle,text,img,subtitleTwo,textTwo,subtitleThree,textThree)=>{
    const publi = await Publication.create({
        title,
        subtitle,
        text,
        img,
        subtitleTwo,
        textTwo,
        subtitleThree,
        textThree,
        asset:true,
        UserIdUser:idUser
    })
    return "Se agrego con exito"
}

const publisById = async (id)=>{
    const publi = await Publication.findAll({
        where:{
            UserIdUser:id
        }
    })
    return publi
}

const publisByIdDetail =async (id)=>{
    const publi = await Publication.findByPk(id)
    return publi
}

const publiGet = async ()=>{
    const response = await Publication.findAll()
    return response
}
module.exports={
    publicationControllers,
    publisById,
    publisByIdDetail,
    publiGet
}