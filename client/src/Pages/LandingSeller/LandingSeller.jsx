import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Tab, Tabs, Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';  
import styles from './LandingSeller.module.css';

export default function LandingSeller() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    };


  return (
    <div className={styles.container}> 
      <div className={styles.subcontainer}>
        <h3>Hay tantas razones para empezar</h3>
          <ul className={styles.list}>
              <li className={styles.listElement}>
                  <CheckIcon color="secondary" />Vende desde otras plataformas
              </li>
              <li className={styles.listElement}>
                  <CheckIcon  color="secondary" />Inspira a otros
              </li>
              <li className={styles.listElement}>
                  <CheckIcon  color="secondary" />Consigue recompesas por tu trabajo
              </li>
          </ul>
          <p>Cómo empezar</p>
          <Box>
          <Tabs 
            value={tabIndex} 
            onChange={handleTabChange}
            centered
          >
            <Tab label="Crea tu publicación" />
            <Tab label="Añade incentvos" />
            <Tab label="Comienza a ganar" />
          </Tabs>
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <Box>
                <p>1</p>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <p>2</p>
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <p>3</p>
              </Box>
            )}
          </Box>
        </Box>    
    
      <NavLink to={"/SignupVendedor"}>   
          <Button 
            variant="contained" 
            disableElevation 
            color="secondary"
            sx={{
              width: "270px"
            }}
          >          
            Registrate y comienza a ganar
          </Button>
        </NavLink> 
      </div>
       
     <div className={styles.banner}>
     </div>       
    
    </div>
  )
}

