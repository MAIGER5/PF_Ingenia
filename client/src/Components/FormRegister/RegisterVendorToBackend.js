import axios from "axios";

export default function RegisterUserToBackend(data) {
    //Para visualizar los datos recibidos de Login:
    data.userType = "INSTRUCTOR";
    console.log("datos de RegisterVendorToBackend:");
    console.log(data);
   
    async function dataOwnAccessToBacken() {
        axios
          .post(`"http://localhost:3001/instructor"`, data)
          .then((response) => {console.log(response)
          localStorage.setItem("Token", response.data.tokenSession);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("lastname", response.data.user.lastname);
          localStorage.setItem("userType", "2");
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