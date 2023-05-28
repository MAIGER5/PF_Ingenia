import { useEffect } from 'react';
// import ValoracionesCurso from './ValoracionesCurso';
// import AcercaProfesor from './AcercaProfesor';
// import CardsDetail from './CardsDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailArticle } from '../../Redux/Actions/getDatailArticle';
// import { cleandDetail } from '../../Redux/Actions/cleanDetail';
import { useParams } from 'react-router-dom';
import { Avatar, Rating, Typography } from '@mui/material';

import CardHome from '../../Components/Card/CardHome';

import styles from "./Article.module.css"

export default function Article() {
    const {id} = useParams();
    console.log({id})
    const dispatch = useDispatch();
    const article = useSelector((state)=> state.articleDetail)
    const curs = useSelector((state)=> state.allCourse)

    const cursos = curs.slice(0, 6);
    const ratings = 3.5

    useEffect(()=> {
        dispatch(getDetailArticle(id));
        
    }, [id]);

    console.log(article);    

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
    //TODO renderizar user name
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.title}>
            {article.title}
        </h3>
        <h5 className={styles.legend}>Por Daniel Díaz</h5>
            <div className={styles.containerText}>
                <div className={styles.imageContainer}>
                    <img 
                        src={`${article.img}`}
                        alt="img_publication" 
                        className={styles.image}    
                    />
                </div>
                <div className={styles.containerParagraph}>
                    <h3 className={styles.subtitle}>
                        {article.subtitle}
                    </h3>
                    <p className={styles.text}>
                        {article.text}
                    </p>
                </div>
            </div>
            {(article.subtitleTwo || article.subtitleThree)  && 
            <div className={styles.containersubText}>
                {article.subtitleTwo && 
                    <div className={styles.containerParagraph}>
                        <h3 className={styles.subtitle}>
                            {article.subtitleTwo} 
                        </h3>
                        <p className={styles.text}>
                            {article.textTwo}
                        </p>
                </div>
                }
                {article.subtitleThree && 
                    <div className={styles.containerParagraph}>
                        <h3 className={styles.subtitle}>
                            {article.subtitleThree} 
                        </h3>
                        <p className={styles.text}>
                            {article.textThree}
                        </p>
                    </div>
                }
            </div>
            }
      </div>

      <div className={styles.subContainerInfo}>
          <div className={styles.subModule}>
            <h3 className={styles.subtitle}>
                Acerca de
            </h3>
            <div className={styles.userInfo} >
                <Avatar {...stringAvatar( '80px', '80px', '40px')} />
                <div className={styles.containerName}>
                    <h5 className={styles.userName}>Daniel Díaz</h5>
                    <div className={styles.rating}>
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
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
            r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
          <div className={styles.subModule}>
            <h3 className={styles.subtitle}>
                Cursos de 
                <div className={styles.coursesContainer}>
                    {cursos.map((curso) => (
                    <CardHome
                        idCourse = {curso.idCourse}
                        title={curso.title}
                        lenguage={curso.lenguage}
                        image={curso.image}
                        instructorLastName={curso.Users[0]?.lastname}
                        instructorName={curso.Users[0]?.name}
                        price={curso.price}
                        habilities={curso.habilities}
                        key={curso.idCourse}
                    />
                 ))}
                </div>
            </h3>
          </div>
      </div>


   
    </div>
  )
}
