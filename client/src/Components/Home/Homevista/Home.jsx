import React, { useEffect } from 'react'
import { Box, Stack, Typography} from '@mui/material';
import Carrusel from '../../Hero Section/HeroSection';
import styled from "./Home.module.css"
import HomeTopVentas from '../HomeTopVentas/HomeTopVentas';
import HomeTopPublicaiones from '../HomeTopPublicaiones/HomeTopPublicaiones';
import HomeRebajas from '../Home Rebajas/HomeRebajas';
import HomeMejorcalificados from '../HomeMejorcalificados/HomeMejorcalificados';
import HomeCategorias from '../HomeCategorias/HomeCategorias';
import { useDispatch } from 'react-redux';
import { getCourses } from '../../../Redux/Actions/getCourses';



export default function HomeComponent() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCourses());
  }, [dispatch])


  return (
    <Box>
     <Carrusel/>
     <div  className={styled.BanerHomeVendeConNosotros}>
      <Typography variant="h6"  sx={{marginTop:1 , color:"#FFFFFE" ,display:"flex" ,justifyContent:"center",}} >Vende con nosotros</Typography>
     </div>
    <div className={styled.Home}>
     <HomeTopVentas />
     <HomeTopPublicaiones/>
     </div>
     <HomeRebajas/>
     <HomeMejorcalificados/>
     <HomeCategorias/>
     </Box>
  )
}
