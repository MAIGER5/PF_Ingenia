import axios from "axios";

export default function RegisterUserToBackend(data) {
    //Para visualizar los datos recibidos de Login:
    data.userType = "STUDENT"
    console.log("datos de RegisterUserToBackend:");
    console.log(data);
   
    async function dataOwnAccessToBacken() {
        axios
          .post(`${import.meta.env.VITE_HOST}/user/created`, data)
          .then((response) => {console.log(response)
          localStorage.setItem("Token", response.data.tokenSession);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("lastname", response.data.user.lastname);
          localStorage.setItem("idUser", response.data.user.idUser);
          localStorage.setItem("userType", "1");
          window.location.href = '/'
        })
          .catch((error) => {
            const objetojson = error.request.response;
            const objeto = JSON.parse(objetojson);
            window.alert(objeto.error);
            
            console.log(objeto.loginVerification);
          });   
    }
  
    dataOwnAccessToBacken();
}
