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

      <Box>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* Nombres de Tabs */}
          <div>
          <Tabs value={tabIndex} onChange={handleTabChange} >
            <Tab label="Todos Mis Cursos" sx={{ fontSize: "23px" }} />
            <Tab label="Mis Favoritos" sx={{ fontSize: "23px" }} />
          </Tabs>
          </div>

          {/* Barra de Búsqueda */}
          <div><MyCoursesSearch/></div>

        </div>


        <Box sx={{ padding: 2 }}>

          {tabIndex === 0 && (
            <Box>
              <PaginationGrid arrayPag={curs} visualize = {8}/>
            </Box>
          )}

          {tabIndex === 1 && (
            <Box>
              <PaginationGrid arrayPag={curs} visualize = {8}/>
            </Box>
          )}
        </Box>

      </Box>

    </div>
  )
}
