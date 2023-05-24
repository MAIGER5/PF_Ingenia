import React, { useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import { Grid, Rating } from '@mui/material';
// import ValoracionesCurso from './ValoracionesCurso';
// import AcercaProfesor from './AcercaProfesor';
// import CardsDetail from './CardsDetail';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDetailCourse } from '../../Redux/Actions/getDetailCourse';
// import { cleandDetail } from '../../Redux/Actions/cleanDetail';
import { useParams } from 'react-router-dom';

import styles from "./Article.module.css"

export default function Article() {
    const {id} = useParams();
    console.log({id})
    //const dispatch = useDispatch();

    let publication = "publication";

    useEffect(()=> {
        //dispatch(getDetailCourse(id));
        
        // return ()=> {
        //     dispatch(cleandDetail())
        // }
    }, [id]);

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
                    <p>
                    Este curso se divide en 4 modulos don de aprenderas lo siguiente;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                        r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
            </div>
            <div className={styles.containersubText}>
                <div>
                    <h3 className={styles.subtitle}>
                        Subtitulo 2
                    </h3>
                    <p>
                    Este curso se divide en 4 modulos don de aprenderas lo siguiente;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                    r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
                <div>
                    <h3 className={styles.subtitle}>
                        Subtitulo 3
                    </h3>
                    <p>
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
                {/* Avatar */}
                <h5>Daniel Díaz</h5>
                {/* Rating */}
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
            </h3>
          </div>
      </div>


   
    </div>
  )
}
