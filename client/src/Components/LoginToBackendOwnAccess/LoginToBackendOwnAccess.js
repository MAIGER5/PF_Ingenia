import axios from "axios";

export default function LoginToBackendOwnAccess(data) {
  //Para visualizar los datos recibidos de Login:
  console.log("datos de LoginToBackendOwnAccess:");
  console.log(data);
  if (data.userType == "SignupUsuario") data.userType = "STUDENT";
  if (data.userType == "SignupVendedor") data.userType = "INSTRUCTOR";

  async function dataOwnAccessToBackent() {
    try {
      const response = await axios.post(`http://localhost:3001/logpropio`,data);
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
        window.location.href = "http://localhost:5173";
      }
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
    }
  }

  dataOwnAccessToBackent();
}
