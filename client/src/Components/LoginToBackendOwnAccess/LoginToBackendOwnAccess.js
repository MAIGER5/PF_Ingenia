import axios from "axios";

export const DATA_LOGIN = "DATA_LOGIN";

export default function LoginToBackendOwnAccess(data, dispatch) {
  let devolution = {
    validado: false,
    error: null
  };

  console.log("datos de LoginToBackendOwnAccess recibidos de FormLogin:");
  console.log(data);

  if (data.userType == "SignupUsuario") data.userType = "STUDENT";
  if (data.userType == "SignupVendedor") data.userType = "INSTRUCTOR";

  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/user/login`, data)
      .then((response) => {
        console.log(response);
        let respBack = response.data.user;

        if (respBack.Is == "STUDENT") respBack.userType = 1;
        if (respBack.Is == "INSTRUCTOR") respBack.userType = 2;
        if (respBack.Is == "ADMIN") respBack.userType = 3;

        //console.log("Variable recibida del Back y adaptada, aun en el LoginToBackendOwnAccess:");
        //console.log(respBack);

        // Guardo datos en el local Storage
        localStorage.setItem("Token", response.data.tokenSession);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("lastname", response.data.user.lastname);
        localStorage.setItem("idUser", response.data.user.idUser);
        if(response.data.user.Is == "STUDENT") localStorage.setItem("userType", "1");
        if(response.data.user.Is == "INSTRUCTOR") localStorage.setItem("userType", "2");
        if(response.data.user.Is == "ADMIN") localStorage.setItem("userType", "3");

        dispatch({
          type: DATA_LOGIN,
          payload: respBack,
        });

        devolution.validado = true;
        resolve(devolution);
      })
      .catch((error) => {
          // Adapto el dato recibido para trabajarlo mejor:
            const objetojson = error.request.response;
             const objeto = JSON.parse(objetojson);
              //window.alert(objeto.error);
                //console.log(objeto.loginVerification);
        
          // Envío la respuesta:
            devolution.error = objeto.error;
            reject(devolution);
      });
  });
}