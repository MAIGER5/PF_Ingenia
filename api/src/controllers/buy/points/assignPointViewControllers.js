const {Assessment,Course} = require('../../../database')

const assignPointViewControllers = async (id)=>{
    const response = await Assessment.findAll({
        where:{
            UserIdUser:id
        }
    })
    if(response.length){
        const courses = response.map((obj)=> obj.idCor)
        let resposeCourse = []
        for(let i=0;i<courses.length;i++){
            const cor = await Course.findByPk(courses[i])
            const {idCourse,title} = cor
            resposeCourse.push({idCourse,title})
        }
    
        return resposeCourse
    }else{
        throw new Error("No tienes cursos por calificar")
    }

}
module.exports = assignPointViewControllers;
