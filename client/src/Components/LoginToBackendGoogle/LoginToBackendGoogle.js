import axios from "axios";

export default function LoginToBackendGoogle (credentials, userType) {

    //De los datos recibidos, extraigo los datos que necesito enviar al Backend
    let data = credentials.user.auth.currentUser.providerData[0]
    data.emailVerified = credentials.user.auth.currentUser.emailVerified
    //delete data.uid;
    delete data.phoneNumber;
    //if (data.userType == "SignupUsuario") data.userType = "STUDENT";
    //if (data.userType == "SignupVendedor") data.userType = "INSTRUCTOR";
    //console.log("data.userType:");
    //console.log(data.userType);
    if (userType == "SignupUsuario") data.Is = "STUDENT";
    if (userType == "SignupVendedor") data.Is = "INSTRUCTOR";

    //Para visualizar los datos recibidos de Google:
    console.log("Datos recibidos de Google:");
    console.log(data);

    async function dataGoogleToBackent() {
        try {
          const response = await axios.post(`http://localhost:3001/user/login/google`,data);
          console.log("Respuesta del servidor:");
          console.log(response.data);
          if (response.data.loginVerification === false) {
            window.alert("Las credenciales no son correctas");
          } else {
            localStorage.setItem("Token", response.data.tokenSession);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("lastname", response.data.user.lastname);
            if(response.data.user.userType == "STUDENT") localStorage.setItem("userType", "1");
            if(response.data.user.userType == "INSTRUCTOR") localStorage.setItem("userType", "2");
            if(response.data.user.userType == "ADMIN") localStorage.setItem("userType", "3");
            window.location.href = '/';
          }
        } catch (error) {
          console.error("Error en la solicitud POST:", error);
        }
        
    }

    dataGoogleToBackent();
}