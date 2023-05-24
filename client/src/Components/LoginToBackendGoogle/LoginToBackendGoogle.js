import axios from "axios";
import { DATA_LOGIN } from "../LoginToBackendOwnAccess/LoginToBackendOwnAccess";

export default function LoginToBackendGoogle(credentials, userType, dispatch) {
  //De los datos recibidos, extraigo los datos que necesito enviar al Backend
  let data = credentials.user.auth.currentUser.providerData[0];
  data.emailVerified = credentials.user.auth.currentUser.emailVerified;
  delete data.phoneNumber;

  if (userType == "SignupUsuario") data.userType = "STUDENT";
  if (userType == "SignupVendedor") data.userType = "INSTRUCTOR";

  //Para visualizar los datos recibidos de Google:
  //console.log("Datos recibidos de Google:");
  //console.log(data);

  // Solicitud al servidor:
  async function dataOwnAccessToBackent() {
    const response = await axios.post(`http://localhost:3001/user/login/google`, data)
    //console.log(response);
    let respBack = response.data.user;

    if (respBack.Is == "STUDENT") respBack.userType = 1;
    if (respBack.Is == "INSTRUCTOR") respBack.userType = 2;
    if (respBack.Is == "ADMIN") respBack.userType = 3;

    //console.log("Variable recibida del Back y adaptada, aun en el LoginToBackendOwnAccess:");
    //console.log(respBack);
    localStorage.setItem("Token", response.data.tokenSession);
    localStorage.setItem("name", response.data.user.name);
    localStorage.setItem("lastname", response.data.user.lastname);
    localStorage.setItem("idUser", response.data.user.idUser);
    console.log(response);
    if (response.data.user.Is == "STUDENT") localStorage.setItem("userType", "1");
    if (response.data.user.Is == "INSTRUCTOR") localStorage.setItem("userType", "2");
    if (response.data.user.Is == "ADMIN") localStora

    dispatch({
      type: DATA_LOGIN,
      payload: respBack,
    });


/*     axios
      .post(`http://localhost:3001/user/login/google`, data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.tokenSession);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("lastname", response.data.user.lastname);
        localStorage.setItem("idUser", response.data.user.idUser);
        console.log(response);
        if (response.data.user.Is == "STUDENT")
          localStorage.setItem("userType", "1");
        if (response.data.user.Is == "INSTRUCTOR")
          localStorage.setItem("userType", "2");
        if (response.data.user.Is == "ADMIN")
          localStorage.setItem("userType", "3");
        window.location.href = "/";
      })
      .catch((error) => {
        const objetojson = error.request.response;
        const objeto = JSON.parse(objetojson);
        console.log(objeto);
        window.alert(objeto.error);

        console.log(objeto.loginVerification);
      }); */
  }

  dataOwnAccessToBackent();
}

//comente esto y puse todo lo que habia en el login de usuario jejeje perdon, asi funciona la ruta, pueden probar :)

//     async function dataGoogleToBackent() {
//         try {
//           const response = await axios.post(`http://localhost:3001/user/login/google`,data);
//           console.log("Respuesta del servidor:");
//           console.log(response.data);
//           if (response.data.loginVerification === false) {
//             window.alert("Las credenciales no son correctas");
//           } else {
//             localStorage.setItem("Token", response.data.tokenSession);
//             localStorage.setItem("name", response.data.user.name);
//             localStorage.setItem("lastname", response.data.user.lastname);
//             if(response.data.user.userType == "STUDENT") localStorage.setItem("userType", "1");
//             if(response.data.user.userType == "INSTRUCTOR") localStorage.setItem("userType", "2");
//             if(response.data.user.userType == "ADMIN") localStorage.setItem("userType", "3");
//             window.location.href = '/';
//           }
//         } catch (error) {
//           console.error("Error en la solicitud POST:", error);
//         }

//     }

//     dataGoogleToBackent();
// }
