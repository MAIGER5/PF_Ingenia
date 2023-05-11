import React from 'react'
import { Box, Stack, Typography} from '@mui/material';
import Carrusel from '../../Hero Section/HeroSection';
import styled from "./Home.module.css"
import HomeTopVentas from '../HomeTopVentas/HomeTopVentas';
import HomeTopPublicaiones from '../HomeTopPublicaiones/HomeTopPublicaiones';
export default function HomeComponent() {
  return (
    <Box>
     <Carrusel/>
     <div  className={styled.BanerHomeVendeConNosotros}>
      <Typography variant="h6"  sx={{marginTop:1 , color:"#FFFFFE" ,display:"flex" ,justifyContent:"center",}} >Vende con nosotros</Typography>
     </div>
    <div className={styled.Home}>
     <HomeTopVentas/>
     <HomeTopPublicaiones/>
     </div>
     </Box>
  )
}
