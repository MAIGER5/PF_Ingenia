const {User,Publication,Course} = require('../../database')

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
    const {
        UserIdUser,            
        title,
        subtitle,
        text,
        img,
        subtitleTwo,
        textTwo,
        subtitleThree,
        textThree
    } = publi

    const user = await User.findByPk(UserIdUser,{
        include:[{
            model: Course,
            through:{
                attributes:[],
            },
        }
      ],
    })
    return {
        UserIdUser,            
        title,
        subtitle,
        text,
        img,
        subtitleTwo,
        textTwo,
        subtitleThree,
        textThree,
        user
    }
}

const publiGet = async ()=>{
    const response = await Publication.findAll()

    let publi = [];

    for(let i=0;i<response.length;i++){

        const {UserIdUser} = response[i]

        const responseUser = await User.findByPk(UserIdUser)
        const {name,lastname} = responseUser

        const {
            idPublications,
            title,
            subtitle,
            text,
            img,
            subtitleTwo,
            textTwo,
            subtitleThree,
            textThree,
            asset,
            createdAt,
            updatedAt
        } = response[i]

        publi.push({
            idPublications,
            title,
            subtitle,
            text,
            img,
            subtitleTwo,
            textTwo,
            subtitleThree,
            textThree,
            asset,
            createdAt,
            updatedAt,
            User:{
                name,
                lastname
            }
        })
    }
    return publi

}
module.exports={
    publicationControllers,
    publisById,
    publisByIdDetail,
    publiGet
}