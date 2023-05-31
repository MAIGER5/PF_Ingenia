import { useState  } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
import { auth } from "../../firebase/config";
import FormLogin from "../../Components/FormLogin/FormLogin"


import GoogleIcon from "@mui/icons-material/Google";
import { Box, Tab, Tabs, Button } from "@mui/material";
import styles from "./Login.module.css";
import LoginToBackendGoogle from "../../Components/LoginToBackendGoogle/LoginToBackendGoogle";
import { useDispatch } from "react-redux";
import RequestDataCourses from "../../Components/RequestDataCourses/RequestDataCourses";

export const LOGIN_USER = "LOGIN_USER"

export default function Login() {
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Provider de Google
  const provider = new GoogleAuthProvider();

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  //Iniciar sesión con Google
  const signInGoogle = (type) => {
    signInWithPopup(auth, provider)
    .then(async (result) => {

      try {

        const devolution = await LoginToBackendGoogle(result, type, dispatch)
        console.log(devolution);

        // Consulto si el usuario tiene cursos
        // y los guardo en el localStorage
          // async function fetchData() {
          //   try {
          //     const courses = await RequestDataCourses();
          //       let userCourseIds = [];
          //           for (let index = 0; index < courses.length; index++) {
          //               userCourseIds.push(courses[index].idCourse) }
          //     console.log(userCourseIds);
          //     localStorage.setItem("myCourses", userCourseIds);

          //   } catch (error) {
          //     console.error("Error fetching data:", error);
          //        } }

          // await fetchData();

          // Consulto si el usuario tiene calificaciones en sus cursos
          // y los guardo en el localStorage
        //   async function fetchDataRating() {
        //     try {
        //       const ratingCourses = await RequestRatingUserCourses();
        //       let ratingCoursesIds = await ratingCourses.map((element) => element.idCourse)
        //       await localStorage.setItem("myRatingCourses", ratingCoursesIds);
        //       console.log("ratingCoursesIds");
        //       console.log(ratingCoursesIds);

        //     } catch (error) {
        //       console.error("Error fetching data:", error);
        //          } }

        // await fetchDataRating();

        window.location.href = "/";

      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }).catch((error) => {
      console.log(error.message)
    });
  }

  const loginBottom = (type) => {
    return (
      <div className={styles.containerBottom}>
        <div className={styles.decoContainer}>
          <hr className={styles.line}/>
          <span className={styles.decoration}>o</span>
          <hr className={styles.line}/>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<GoogleIcon />}
          sx={{ width: "280px", fontSize: "15px" }}
          onClick={() => signInGoogle(type)}
        >
          Continuar con Google
        </Button>
        <p className={styles.textBottom}>
          ¿Aún no tienes una cuenta?
          <NavLink
            style={{ textDecoration: 'none'}}
            to={`/${type}`}
          >
            <span className={styles.textLink}> Regístrate</span>
          </NavLink>
        </p>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Inicia sesión en tu cuenta Ingenia
      </p>
      <Box>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
        >
          <Tab
            label="Usuario"
            sx={{ fontSize: "16px" }}
          />
          <Tab
            label="Vendedor"
            sx={{ fontSize: "16px" }}
          />
        </Tabs>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box>
              <FormLogin userType="SignupUsuario"/>
              {loginBottom("SignupUsuario")}
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <FormLogin userType="SignupVendedor"/>
              {loginBottom("SignupVendedor")}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
