const {User,Course,Assessment,Point} = require('../../../database')
const assignPointsControllers = async (user,idCourse,coment,value)=>{
    const asses = await Assessment.findAll({
        where:{
            UserIdUser:user,
            idCor:idCourse
        }
    })
    
    const pointsResponse = await Point.create({
        assessment:value,
        comement:coment,
        UserIdUser:user,
        CourseIdCourse:idCourse
    })

    const courseResponse = await Course.findByPk(idCourse,{
        include:[{
            model: User,
            attributes:["idUser"],
            through:{
                attributes:[],
            },
        }]
    })

    let numbSales = courseResponse.numberSales
    let assesCuor = courseResponse.assessment
    
    numbSales = numbSales + 1
    assesCuor = assesCuor + value

    courseResponse.update({
        numberSales:numbSales,
        assessment:assesCuor
    })


    const {idUser} = courseResponse.Users[0]
    const userResponse = await User.findByPk(idUser)

    let numbSalesUser =userResponse.numberSales
    let assesUser =userResponse.assessment

    numbSalesUser = numbSalesUser + 1
    assesUser = assesUser + value

    userResponse.update({
        numberSales:numbSalesUser,
        assessment:assesUser
    })
    
    const id = asses[0].idAssessment
    console.log(id);
    const del = await Assessment.destroy({
        where:{
            idAssessment:id
        }
    })

    return "finished valuation"
}
module.exports=assignPointsControllers;