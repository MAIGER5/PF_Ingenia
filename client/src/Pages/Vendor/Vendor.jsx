import { useState } from "react";
import VendorArtículos from "../../Components/VendorViews/VendorArticulos/VendorArtículos";
import VendorCursos from "../../Components/VendorViews/VendorCursos/VendorCursos";
import VendorValoraciones from "../../Components/VendorViews/VendorValoraciones/VendorValoraciones";

import { Box, Tab, Tabs } from "@mui/material";
import styles from "./Vendor.module.css"

export default function Vendor() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

  return (
    <div className={styles.container}> 
        <div className={styles.subcontainer}>
            <div>
                <p>Daniel Díaz</p>
            </div>
            <div className={styles.subcontainerUser}>
                <div>
                    <div>
                        <p>Avatar</p>
                    </div>
                    <div>
                        <p>Rating</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Description</p>
                    </div>
                    <div>
                        <p>Estudios</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Mas vendido </p>
                </div>
                <div>
                    <p>Publicaciones</p>
                </div>
            </div>
        </div>
        <div>
            <Box>
                <Tabs 
                value={tabIndex} 
                onChange={handleTabChange}
                centered
                >
                <Tab 
                    label="Cursos" 
                    sx={{ fontSize: "16px" }}
                />
                <Tab 
                    label="Artículos" 
                    sx={{ fontSize: "16px" }}  
                />
                <Tab 
                    label="Valoraciones" 
                    sx={{ fontSize: "16px" }}  
                />
                </Tabs>
                <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                    <Box>
                        <p>Cursos</p>
                        <VendorCursos />
                    </Box>
                )}
                {tabIndex === 1 && (
                    <Box>
                        <p>Articulos</p>
                        <VendorArtículos />
                    </Box>
                )}
                {tabIndex === 2 && (
                    <Box>
                        <p>Valoraciones</p>
                        <VendorValoraciones />
                    </Box>
                )}
                </Box>
            </Box>
        </div>

    </div>
  )
}
