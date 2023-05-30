import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  Alert,
  Snackbar,
  CardMedia,
  Typography,
  Rating,
}from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from "./CardHome.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCarrito } from '../../Redux/Actions/actionsCarrito/addToCarrito';
import { RemoveOneFromCarrito } from '../../Redux/Actions/actionsCarrito/RemoveOneFromCarrito';
import { addToCarritoBd } from '../../Redux/Actions/addToCarritoBd';
import { RemoveToByBD } from '../../Redux/Actions/RemoveToByBD';


function CardHome({title, image, instructorName, instructorLastName, price, lenguage, ratings = 5, idCourse}) {
  //prueba
  // const localStorageInfoUser = useSelector((state) => state.localStorageData);
  const userId = localStorage.getItem('idUser');

  // En la vista MisCursos, no se debe visualizar el precio y carrito. Se utiliza el siguiente estado:
    const tabIndex = useSelector((state) => state.setActiveTab);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [colorCart, setcolorCart] = useState("");
  const [isAlertAdd, setIsAlertAdd] = useState(false);
  const [isAlertDelete, setIsAlertDelete] = useState(false);
  const [purchasedCourse, setPurchasedCourse] = React.useState(false);

  //Logica para el cambio de color del carrito
  useEffect(() => {
    if(localStorage.getItem("mode") === 'dark'){
      setcolorCart('#FFFFFE')
    } else {
      setcolorCart('#000000')
    }

      // Consulto si el usuario ha comprado éste curso:
      let myCoursesString = localStorage.getItem("myCourses");
        //let myCourses = myCoursesString.includes(",") ? myCoursesString.split(",") : [myCoursesString];
      let myCourses =  myCoursesString ? myCoursesString.split(",").map(Number) : [Number(myCoursesString)];
      //console.log("En CardHome");
      if(myCourses.includes(idCourse)) setPurchasedCourse(true);

  },[])

  //Lógica para activado/desactivado del carrito
  const handleCart = () => {
    if(!isActive){
      if (localStorage.getItem('name')) {
        setIsActive(true)
        setIsAlertAdd(true)
        dispatch(addToCarritoBd(idCourse, userId))
        dispatch(addToCarrito(idCourse))
      } else {
        navigate('/Login')
      }

    }else {
      setIsActive(false)
      setIsAlertDelete(true)
      dispatch(RemoveOneFromCarrito(idCourse))
      dispatch(RemoveToByBD(idCourse, userId))
    }
  }

  return (
    <>
      {isAlertAdd &&
        (<Snackbar open={isAlertAdd} autoHideDuration={2000} onClose={()=>setIsAlertAdd(false)}>
            <Alert
                variant="filled" severity="info"
                icon={<InsertEmoticonIcon fontSize="inherit" />}
            >
              Has agregado un curso a tu carrito
            </Alert>
        </Snackbar>)}
      {isAlertDelete &&
        (<Snackbar open={isAlertDelete} autoHideDuration={2000} onClose={()=>setIsAlertDelete(false)}>
            <Alert
                variant="filled" severity="info"
                icon={<SentimentVeryDissatisfiedIcon fontSize="inherit" />}
            >
              Has eliminado un curso de tu carrito
            </Alert>
        </Snackbar>)}
    <div className={styles.container}>
      <div>
        <NavLink
            to={`/DetailCourse/${idCourse}`}
            style={{ textDecoration: 'none' }}
        >
          <CardMedia
            sx={{ height: 180, width: 230,  borderRadius: "5px" }}
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

              {!purchasedCourse &&
                  (isActive ? <ShoppingCartIcon color='secondary' sx={{ width: "20px" }} /> :
                      <ShoppingCartIcon sx={{ color: `${colorCart}`, width: "20px" }}/>
              )}
            </button>

          </div>
            {!purchasedCourse && (<p className={styles.pricetag}> ${price} USD </p>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default CardHome;