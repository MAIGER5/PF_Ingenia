const {Favorite,User,Course} = require('../../database')

const favoritePost = async (idUser,idCourse)=>{
    if(!idUser || !idCourse ) throw new Error("Faltan componentes")

    const newFavorite = await Favorite.findAll({
        where:{
            UserIdUser:idUser
        }
    })

    const a = newFavorite.find((obj)=> obj.idCor === parseInt(idCourse))

    if(!a){
        const response = await Favorite.create({UserIdUser:idUser,idCor:idCourse})
        response.addCourses(idCourse)
        return response
    } else throw new Error("Ya agregaste este curso")

}

const favoriteGet = async (id)=>{
    const response = await Favorite.findAll({
        where:{
            UserIdUser:id
        },
        include:[{
            model: Course,
            through:{
                attributes:[],
              },
              include:[{
                model: User,
                attributes: ["name","lastname","description","imgProfile","assessment"],
                through:{
                    attributes:[],
                  },
                  
              }]              
          }]
    })

    for(let i=0;i<response.length;i++){
        const cantidad = response[i].Courses[0].numberSales
        const valor = response[i].Courses[0].assessment

        response[i].Courses[0].assessment = valor / cantidad

    }
    let res = []
    for(let i=0;i<response.length;i++){
        const Courses = response[i].Courses[0] //Para quitar los corchetes
        res.push(Courses)
    }
    return res
}

const favoriteDelete = async (idUser,idCourse)=>{

    Favorite.destroy({
        where:{
            UserIdUser:idUser,
            idCor:idCourse
        }
    })
    return "borrado"
}

module.exports={
    favoritePost,favoriteGet,favoriteDelete
}