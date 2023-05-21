import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from "./CardHome.module.css"; 


function CardHome({title, image, instructorName, instructorLastName, price, lenguage, ratings = 5, idCourse}) {

  const [isActive, setIsActive] = useState(false);
  const [colorCart, setcolorCart] = useState("");

  //Logica para el cambio de color del carrito
  useEffect(() => {
    if(localStorage.getItem("mode") === 'dark'){
      setcolorCart('#FFFFFE')
    } else {
      setcolorCart('#000000')
    }
  },[])

  //Lógica para activado/desactivado del carrito
  const handleCart = () => {
    if(!isActive){
      setIsActive(true)
    }else {
      setIsActive(false)
    }
  }

 
  return (

    <div className={styles.container}>
      <div>
        <NavLink 
            to={`/DetailCourse/${idCourse}`}
            style={{ textDecoration: 'none' }}
        >
          <CardMedia
            sx={{ height: 210, borderRadius: "5px" }}
            component='img'
            image={image}
            title="xxxxx"
          />
        </NavLink>
        <div className={styles.containerInfo}>
          <div className={styles.containerInfo} >
            <NavLink 
            to={`/DetailCourse/${idCourse}`}
            style={{ textDecoration: 'none' }}
            >
            <Typography 
              align='left' 
              gutterBottom 
              color="primary" 
              component="div"
              sx={{ fontWeight: 600, fontSize: "1.3rem" }}
            >
            {title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              align='left' 
            >
            Instructor: {instructorLastName} {instructorName}
            </Typography>
            <Typography  
              variant="body2" 
              color="text.secondary"
              align='left' 
            >
            Idioma: {lenguage}
            </Typography>
            </NavLink>
          </div>
          <div className={styles.containerRating}>
            <Typography  
              variant="body2" 
              sx={{ color: "#e91e63" }}
            >
              {ratings}
            </Typography>
            <Rating name="read-only" value={ratings} readOnly sx={{ 
              color: "#e91e63", 
              marginLeft: "5px"
            }} />
            <button 
              onClick={handleCart}
              className={styles.button}
            >

              {isActive ? 
                <ShoppingCartIcon color='secondary'/>
              
              :
              <ShoppingCartIcon sx={{
                color: `${colorCart}`
                }}/>
              }
            </button>
          </div>
          <p className={styles.pricetag}>
          ${price} USD
          </p>
        </div>
      </div>   
    </div>
  )
}

export default CardHome;