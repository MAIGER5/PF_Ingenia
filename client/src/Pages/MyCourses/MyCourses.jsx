import { useEffect, useState } from "react";
import styles from "./MyCourses.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import setActiveTab from "../../Redux/Actions/setActiveTab";
import MyCoursesSearch from "../../Components/MyCoursesSearch/MyCoursesSearch";
import PaginationGrid from "../../Components/PaginationGrid/PaginationGrid";
import AvatarComponent from "../../Components/AvatarComponent/AvatarComponent"
import RequestDataCourses from "../../Components/RequestDataCourses/RequestDataCourses";
import { useLocation } from "react-router-dom";

export default function MyCourses() {

  // Estados locales:
    const [userCourses, setUserCourses] = useState([]);
    const [loading, setLoading] = useState(true);

  // Estado Global: elementos a visualizar
    const curs = useSelector((state)=> state.allCourse)

  // Estado Global: estado actual de Tab
    const tabIndex = useSelector((state) => state.setActiveTab);

  // Redux:
    const dispatch = useDispatch();

  // Pedido de datos al servidor
    useEffect(() => {

      // Cambiar el estado de setActiveTab en Redux antes de salir de la página
      const beforeUnload = () => {
        const newTabIndex = 1;
          dispatch(setActiveTab(newTabIndex));
            //console.log("salgo de la página;");
              };

      async function fetchData() {
        try {
          const courses = await RequestDataCourses();
            setUserCourses(courses);
              setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
            setLoading(false); } }

      fetchData();


      return () => { beforeUnload(); };

    }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; }


  // Función para el cambio de Tabs:
    const handleTabChange = (event, newTabIndex) => {
      dispatch(setActiveTab(newTabIndex)); };

  // Para pruebas de desarrollo:
    // console.log("Arreglo todos los cursos: ");
    // console.log(curs);
    // console.log("Arreglo Cursos de usuario: ");
    // console.log(userCourses);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Mis Cursos
      </h3>

      <Box sx={{ padding: 2, width: "100%", height: "100%" }}>
      <Box sx={{ padding: 2, width: "100%", height: "100%" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%' }}>

          {/* Nombres de Tabs */}
          <div>
          <Tabs value={tabIndex} onChange={handleTabChange} >
            <Tab label="Todos Mis Cursos" sx={{ fontSize: "23px" }} />
            <Tab label="Mis Favoritos" sx={{ fontSize: "23px" }} />
          </Tabs>
          </div>

          {/* Barra de Búsqueda */}
          <div><MyCoursesSearch/></div>

        </div></Box>


        <Box sx={{ padding: 2, width: "100%", height: "100%" }}>

          {tabIndex === 0 && (
            <Box>
              {userCourses.length === 0 ? ("Todavía no tienes Cursos en ésta sección.") :
              (<PaginationGrid arrayPag={userCourses} visualize = {8}/>)}
            </Box>
          )}

          {tabIndex === 1 && (
            <Box>
              {curs.length === 0 ? ("Todavía no tienes Cursos en ésta sección.") :
              (<PaginationGrid arrayPag={curs} visualize = {8}/>)}

            </Box>
          )}
        </Box>

      </Box>

    </div>
  )
}
