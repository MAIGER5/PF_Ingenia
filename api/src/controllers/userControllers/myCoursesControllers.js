const {Bill,Course,User,Category}=require('../../database')

const myCoursesControllers = async (id)=>{
    const myCourses = await Bill.findAll({
        where:{
            UserIdUser:id
        },
        include:[{
            model: Course,
            attributes:["idCourse"],
            through:{
                attributes:[],
            },
        }]
    })

    let myCor=[]
    for(let i=0;i<myCourses.length;i++){
        const {Courses} = myCourses[i]
        for(let j=0;j<Courses.length;j++){
            const {idCourse} = Courses[j]
            console.log(idCourse)
            const cours = await Course.findByPk(idCourse,{
                include:[{
                    model: User,
                    attributes:["name","lastname","description","imgProfile","assessment"],
                    through:{
                        attributes:[],
                    },
                },
                {
                  model:Category,
                  attributes:['name'],
                  through:{
                    attributes:[],
                },
                }
              ],
            })
            const {title,description,image,lenguage,price,pro,pricePro,duration,content,
                dificulty,requirement,learnTo,studyMethod,asset,createdAt,updatedAt,Users,Categories} = cours;

            const users = Users[0]
            const categories = Categories[0].name

            myCor.push({idCourse,title,description,image,lenguage,price,pro,pricePro,duration,content,
                dificulty,requirement,learnTo,studyMethod,asset,createdAt,updatedAt,users,categories})
        }

    }
    return myCor
}
module.exports = myCoursesControllers;