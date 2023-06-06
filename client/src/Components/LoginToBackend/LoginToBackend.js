import axios from "axios";
import env from "../../../env";
import RequestDataCourses from "../RequestDataCourses/RequestDataCourses";
import RequestRatingUserCourses from "../RequestRatingUserCourses/RequestRatingUserCourses";

// Variable de retorno:
    let devolution = {
        validate: false,
        message: "", };

export async function LoginToBackendGoogleCount(credentials, userType, dispatch) {
    //De los datos recibidos, extraigo los datos que necesito enviar al Backend
        let data = credentials.user.auth.currentUser.providerData[0];
            data.emailVerified = credentials.user.auth.currentUser.emailVerified;
        delete data.phoneNumber;
        if (userType == "SignupUsuario") data.userType = "STUDENT";
        if (userType == "SignupVendedor") data.userType = "INSTRUCTOR";

    // Para imprimir por consola:
        // console.log("Datos recibidos de Google:");
        // console.log(data);

    //Declaro la Promesa
        const LogingGoogle = new Promise((resolve, reject) => {
            axios
            .post(`${env.VITE_HOST}/user/login/google`, data)
            .then((response) => { return resolve(response.data.user) })
            .catch((error) => {
                devolution = {validate: false, message: error.response.data.error}
                reject(error) });
        })

    //Pongo a funcionar la promesa:
    await LogingGoogle.then( (response) => { SaveLoginData(response); } )
    .catch(error => { return error})

    return devolution;
}

export async function LoginToBackendIngeniaCount(data, dispatch){
    // Adapto los datos:
        if (data.userType == "SignupUsuario") data.userType = "STUDENT";
        if (data.userType == "SignupVendedor") data.userType = "INSTRUCTOR";

    // Para imprimir por consola:
        // console.log("datos de LoginToBackendIngeniaCount recibidos de FormLogin:");
        // console.log(data);

    //Declaro la Promesa
        const LoginIngenia = new Promise( (resolve, reject) => {
            axios
            .post(`${env.VITE_HOST}/user/login`, data)
            .then((response) => { return resolve(response.data.user) })
            .catch((error) => {
                devolution = {validate: false, message: error.response.data.error}
                reject(error) });
        })

    //Pongo a funcionar la promesa:
    await LoginIngenia.then( (response) => { SaveLoginData(response); } )
        .catch(error => { return error})

    return devolution;

}

async function SaveLoginData(data){
    // Guardo datos en el local Storage
        localStorage.setItem("name", data.name);
        localStorage.setItem("lastname", data.lastname);
        localStorage.setItem("idUser", data.idUser);
        if (data.Is == "STUDENT") localStorage.setItem("userType", "1");
        if (data.Is == "INSTRUCTOR") localStorage.setItem("userType", "2");
        if (data.Is == "ADMIN") localStorage.setItem("userType", "3");
        devolution.validate = true;

    //Consulto si el usuario tiene cursos y los guardo en el localStorage
        const courses = await RequestDataCourses();
        // console.log(courses);

        //si no tiene cursos:
            if (courses.length == 0) {
                localStorage.setItem("myCourses", "0");
                devolution.myCourses = true;};

        //si tiene cursos:
            if (courses.length) {
                let userCourseIds = [];
                for (let index = 0; index < courses.length; index++) {
                userCourseIds.push(courses[index].idCourse) }
                console.log(userCourseIds);
                localStorage.setItem("myCourses", userCourseIds); }

    //Consulto si el usuario tiene calificaciones en sus cursos
        if (courses.length) {
            const ratingCourses = await RequestRatingUserCourses();
            // console.log(ratingCourses);

            //Si no tiene cursos para calificar:
                if (ratingCourses.length == 0) { localStorage.setItem("myRatingCourses", "0") };

            //Si tiene cursos para calificar:
                if (ratingCourses.length) {
                    let ratingCoursesIds = ratingCourses.map((element) => element.idCourse)
                    localStorage.setItem("myRatingCourses", ratingCoursesIds);
                    console.log("ratingCoursesIds:");
                    console.log(ratingCoursesIds);
                }
        }
}
