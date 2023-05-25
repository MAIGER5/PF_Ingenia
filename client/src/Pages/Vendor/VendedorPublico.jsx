import { Box, Grid, Tab, Tabs, Typography } from "@mui/material"
import { CardVendedor } from "./CardVendedor"
import { TopVentasVendor } from "./TopVentasVendor/TopVentasVendor"
import { PublicacionesRecientes } from "./Publicaciones/PublicacionesRecientes"
import { useState } from "react"
import VendorArtículos from "../../Components/VendorViews/VendorArticulos/VendorArtículos"
import VendorValoraciones from "../../Components/VendorViews/VendorValoraciones/VendorValoraciones"
import VendorCursos from "../../Components/VendorViews/VendorCursos/VendorCursos"


export const VendedorPublico = () => {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
      setTabIndex(newTabIndex);
  };
  
  return (
    <Grid>
        <CardVendedor/>

        <Grid container spacing={2}>

            <Grid item xs={6.5} marginLeft={20} marginTop={10}>
              <TopVentasVendor/>
            </Grid>

            <Grid item xs={0} marginTop={10}>
              <PublicacionesRecientes/>
            </Grid>
            
        </Grid>
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
    </Grid>
  )
}
