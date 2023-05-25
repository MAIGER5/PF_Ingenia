import { useState } from "react";
import styles from "./MyCourses.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import setActiveTab from "../../Redux/Actions/setActiveTab";
import MyCoursesComponent from "../../Components/MyCoursesComponent/MyCoursesComponent.jsx"
import MyCoursesSearch from "../../Components/MyCoursesSearch/MyCoursesSearch";

export default function MyCourses() {

  // Redux:
    const tabIndex = useSelector((state) => state.setActiveTab);
      const dispatch = useDispatch();

  //const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    dispatch(setActiveTab(newTabIndex));
      //setTabIndex(newTabIndex);
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
              <MyCoursesComponent/>
            </Box>
          )}

          {tabIndex === 1 && (
            <Box>
              <MyCoursesComponent/>
            </Box>
          )}

        </Box>
      </Box>

    </div>
  )
}
