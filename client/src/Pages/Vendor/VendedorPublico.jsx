import { Box, Grid, Tab, Tabs } from "@mui/material"
import { CardVendedor } from "./CardVendedor"


export const VendedorPublico = () => {
  return (
    <div>
        <CardVendedor/>

        <Grid>
            <Grid>Mas vendidos</Grid>
            <Grid>Publicación Reciente</Grid>
        </Grid>
    </div>
  )
}
