import axios from "axios";

export default function signupGoogle(credentials, userType) {

        //De los datos recibidos, extraigo los datos que necesito enviar al Backend
          let data = credentials.user.auth.currentUser.providerData[0];
            data.emailVerified = credentials.user.auth.currentUser.emailVerified;
              delete data.phoneNumber;
                if (userType == "SignupUsuario") data.userType = "STUDENT";
                if (userType == "SignupVendedor") data.userType = "INSTRUCTOR";
            console.log("userType",data.userType);
      
        // Solicitud al servidor:
        async function dataOwnAccessToBackent() {
            console.log(data);
          const response = await axios.post(`${import.meta.env.VITE_HOST}/user/login/google`, data)
      
          // Edito los datos para trabajar mejor:
              let respBack = response.data.user;
                if (respBack.Is == "INSTRUCTOR") respBack.userType = 2;
                if (respBack.Is == "ADMIN") respBack.userType = 3;
                if (respBack.Is == "STUDENT") respBack.userType = 1;
      
          // Guardo en el Estado Local:
              localStorage.setItem("Token", response.data.tokenSession);
              localStorage.setItem("name", response.data.user.name);
              localStorage.setItem("lastname", response.data.user.lastname);
              localStorage.setItem("idUser", response.data.user.idUser);
                if (response.data.user.Is == "STUDENT") localStorage.setItem("userType", "1");
                if (response.data.user.Is == "INSTRUCTOR") localStorage.setItem("userType", "2");
                if (response.data.user.Is == "ADMIN") localStorage.setItem("userType", "3");
        }
      
        dataOwnAccessToBackent();
          

}