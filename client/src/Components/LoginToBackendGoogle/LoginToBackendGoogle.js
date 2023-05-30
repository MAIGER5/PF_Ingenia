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



  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_HOST}/user/login/google`, data)
      .then((response) => {
        console.log(response);
        let respBack = response.data.user;

        // Adapto los datos:
          if (respBack.Is == "STUDENT") respBack.userType = 1;
          if (respBack.Is == "INSTRUCTOR") respBack.userType = 2;
          if (respBack.Is == "ADMIN") respBack.userType = 3;

        // Para imprimir por consola:
          //console.log("Variable recibida del Back y adaptada, aun en el LoginToBackendOwnAccess:");
          //console.log(respBack);

        // Guardo datos en el local Storage
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("Token", response.data.tokenSession);
          localStorage.setItem("lastname", response.data.user.lastname);
          localStorage.setItem("idUser", response.data.user.idUser);
          if(response.data.user.Is == "STUDENT") localStorage.setItem("userType", "1");
          if(response.data.user.Is == "INSTRUCTOR") localStorage.setItem("userType", "2");
          if(response.data.user.Is == "ADMIN") localStorage.setItem("userType", "3");

        // Guardo en el Estado Global:
          dispatch({ type: DATA_LOGIN, payload: respBack, });

        resolve();
      })
      .catch((error) => {
          console.log(error);
            reject();
      });
  });

}

