import { useEffect } from 'react';
// import ValoracionesCurso from './ValoracionesCurso';
// import AcercaProfesor from './AcercaProfesor';
// import CardsDetail from './CardsDetail';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDetailCourse } from '../../Redux/Actions/getDetailCourse';
// import { cleandDetail } from '../../Redux/Actions/cleanDetail';
import { useParams } from 'react-router-dom';
import { Grid, Avatar, Rating, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import CardHome from '../../Components/Card/CardHome';

import styles from "./Article.module.css"

export default function Article() {
    const {id} = useParams();
    console.log({id})
    //const dispatch = useDispatch();
    const curs = useSelector((state)=> state.allCourse)

    let publication = "publication"; 
    const cursos = curs.slice(0, 6);
    const ratings = 3.5

    useEffect(()=> {
        //dispatch(getDetailCourse(id));
        
        // return ()=> {
        //     dispatch(cleandDetail())
        // }
    }, [id]);


    function stringAvatar(userHeight, userWidth, userFontSize) {
        const name = "Daniel"
        const lastname = "Diaz"
        if (lastname == null) {

            return {
                sx: {
                bgcolor: "#FF8906",
                height: `${userHeight}`,
                width: `${userWidth}`,
                fontSize: `${userFontSize}`,
                },
                /* children: `${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`, */
                children: `${name.charAt(0).toUpperCase()}`,
            };
        } else {
            return {
            sx: {
            bgcolor: "#FF8906",
            height: `${userHeight}`,
            width: `${userWidth}`,
            fontSize: `${userFontSize}`,
            },
            /* children: `${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`, */
            children: `${name.charAt(0).toUpperCase()}${lastname.charAt(0).toUpperCase()}`,
        };
        }

    }

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.title}>
        Título de publicación
        </h3>
        <h5 className={styles.legend}>Por Daniel Díaz</h5>
            <div className={styles.containerText}>
                <div className={styles.imageContainer}>
                    <img 
                        src='https://res.cloudinary.com/dvvqbwhcc/image/upload/v1684286572/ingeniaAssets/banner-vendedor_p1ztmc.png' 
                        alt="img_publication" 
                        className={styles.image}    
                    />
                </div>
                <div className={styles.containerParagraph}>
                    <h3 className={styles.subtitle}>
                        Subtitulo
                    </h3>
                    <p className={styles.text}>
                    Este curso se divide en 4 modulos don de aprenderas lo siguiente;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                        r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
            </div>
            <div className={styles.containersubText}>
                <div className={styles.containerParagraph}>
                    <h3 className={styles.subtitle}>
                        Subtitulo 2
                    </h3>
                    <p className={styles.text}>
                    Este curso se divide en 4 modulos don de aprenderas lo siguiente;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                    r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
                <div className={styles.containerParagraph}>
                    <h3 className={styles.subtitle}>
                        Subtitulo 3
                    </h3>
                    <p className={styles.text}>
                    Este curso se divide en 4 modulos don de aprenderas lo siguiente;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                    r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
            </div>
      </div>

      <div className={styles.subContainerInfo}>
          <div>
            <h3 className={styles.subtitle}>
                Acerca de
            </h3>
            <div>
                <Avatar {...stringAvatar( '80px', '80px', '40px')} />
                <h5>Daniel Díaz</h5>
                <div>
                    <Typography  
                        variant="body2" 
                        sx={{ color: "#e91e63" }}
                    >
                        {ratings}
                    </Typography>
                    <Rating 
                        name="half-rating-read" 
                        precision={0.5} 
                        value={ratings} 
                        readOnly 
                        sx={{ 
                            color: "#e91e63", 
                            marginLeft: "5px"
                        }} 
                    />
                </div>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
            r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
          <div>
            <h3 className={styles.subtitle}>
                Cursos de 
                <div>
                    {cursos.map((curso) => (
                <Grid item xs={1} sm={1} md={1} key={curso.idCourse}>
                <CardHome
                    idCourse = {curso.idCourse}
                    title={curso.title}
                    lenguage={curso.lenguage}
                    image={curso.image}
                    instructorLastName={curso.Users[0]?.lastname}
                    instructorName={curso.Users[0]?.name}
                    price={curso.price}
                    habilities={curso.habilities}
                />
                </Grid>
            ))}
                </div>
            </h3>
          </div>
      </div>


   
    </div>
  )
}
