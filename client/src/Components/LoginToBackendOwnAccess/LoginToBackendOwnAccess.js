import axios from "axios";

export default function LoginToBackendOwnAccess(data) {
  //Para visualizar los datos recibidos de Login:
  console.log("datos de LoginToBackendOwnAccess:");
  console.log(data);
  if (data.userType == "SignupUsuario") data.userType = "STUDENT";
  if (data.userType == "SignupVendedor") data.userType = "INSTRUCTOR";

  async function dataOwnAccessToBackent() {
      axios
        .post(`http://localhost:3001/user/login`, data)
        .then((response) => {console.log(response)
        localStorage.setItem("Token", response.data.tokenSession);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("lastname", response.data.user.lastname);
        localStorage.setItem("idUser", response.data.user.idUser);
        if(response.data.user.Is == "STUDENT") localStorage.setItem("userType", "1");
        if(response.data.user.Is == "INSTRUCTOR") localStorage.setItem("userType", "2");
        if(response.data.user.Is == "ADMIN") localStorage.setItem("userType", "3");
        window.location.href = '/'
      })
        .catch((error) => {
          const objetojson = error.request.response;
          const objeto = JSON.parse(objetojson);
          window.alert(objeto.error);
          
          console.log(objeto.loginVerification);
        });   
  }

  dataOwnAccessToBackent();
}
