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
        <h3 className={styles.title}>
          Hay tantas razones para empezar
        </h3>
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
          <p className={styles.subtitle}>
            Cómo empezar
          </p>
          <Box>
          <Tabs 
            value={tabIndex} 
            onChange={handleTabChange}
            centered
          >
            <Tab
              sx={{ fontSize: "16px" }} 
              label="Crea tu publicación" 
            />
            <Tab 
              sx={{ fontSize: "16px" }} 
              label="Añade incentvos" 
            />
            <Tab 
              sx={{ fontSize: "16px" }}
              label="Comienza a ganar"   
            />
          </Tabs>
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <div className={styles.textContainer} >
                <p className={styles.text}>
                  ¡Únete a Ingenia y comienza a compartir tus conocimientos con el mundo! 
                  Nuestra plataforma en línea te brinda la oportunidad de crear y publicar tus propios cursos desde otros partners.  
                </p>
              </div>
            )}
            {tabIndex === 1 && (
              <div className={styles.textContainer}>
                <p className={styles.text}>
                  Te alentamos a añadir incentivos atractivos para atraer a más estudiantes. Puedes ofrecer descuentos especiales, material adicional, acceso exclusivo a recursos o crear tus 
                  propios artículos informativos. ¡La elección es tuya!
                </p>
              </div>
            )}
            {tabIndex === 2 && (
              <div className={styles.textContainer}>
                <p className={styles.text}>
                  Puedes empezar a ganar dinero 
                  por tus cursos en línea. Cada venta que realices te generará ingresos y a medida que tus cursos se vuelvan populares y recibas buenas valoraciones de los 
                  estudiantes, tu perfil y reputación crecerán.
                </p>
              </div>
            )}
          </Box>
        </Box>    
    
      <NavLink to={"/SignupVendedor"}>   
          <Button 
            variant="contained" 
            disableElevation 
            color="secondary"
            sx={{
              width: "270px",
              fontSize: "16px"
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

