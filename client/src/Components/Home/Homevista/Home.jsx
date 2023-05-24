import { useEffect } from 'react'
import { Box, Typography} from '@mui/material';
import Carrusel from '../../Hero Section/HeroSection';
import styled from "./Home.module.css"
import HomeTopVentas from '../HomeTopVentas/HomeTopVentas';
import HomeTopPublicaiones from '../HomeTopPublicaiones/HomeTopPublicaiones';
import HomeRebajas from '../Home Rebajas/HomeRebajas';
import HomeMejorcalificados from '../HomeMejorcalificados/HomeMejorcalificados';
import HomeCategorias from '../HomeCategorias/HomeCategorias';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToCarritoBd } from '../../../Redux/Actions/getToCarritoBd';

export default function HomeComponent() {

  const dispatch = useDispatch();
  const user = localStorage.getItem('idUser')
  const carrito = useSelector((state)=> state.allCarrito)

  useEffect(()=>{
    !carrito.length? dispatch(getToCarritoBd(user)): "nada"
  }, []);

  return (
    <Box sx={{width:1600}}>
      <Carrusel/>
        {Number(localStorage.getItem("userType")) === 0 &&
        <div  className={styled.BanerHomeVendeConNosotros}>
        <NavLink 
          to={"/LandingSeller"} 
          style={{ textDecoration: 'none' }}
        >
          <Typography 
            variant="h6"  
            sx={{ 
              marginTop:1 , 
              color:"#FFFFFE" ,
              display:"flex" ,
              justifyContent:"center",

            }}
          >
            ¡Vende con nosotros! - Registrate aquí
          </Typography>
        </NavLink>
        </div>
        }
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
