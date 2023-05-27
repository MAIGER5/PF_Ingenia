import { useState } from "react";
import styles from "./MyCourses.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import setActiveTab from "../../Redux/Actions/setActiveTab";
import MyCoursesSearch from "../../Components/MyCoursesSearch/MyCoursesSearch";
import PaginationGrid from "../../Components/PaginationGrid/PaginationGrid";

export default function MyCourses() {
  const dispatch = useDispatch();

  // Estado Global: elementos a visualizar
    const curs = useSelector((state)=> state.allCourse)

  // Estado Global: estado actual de Tab
    const tabIndex = useSelector((state) => state.setActiveTab);

  // Función para el cambio de Tabs:
  const handleTabChange = (event, newTabIndex) => {
    dispatch(setActiveTab(newTabIndex));
  };

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
              {curs.length === 0 ? ("Todavía no tienes Cursos en ésta sección.") :
              (<PaginationGrid arrayPag={curs} visualize = {8}/>)}
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
