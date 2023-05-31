import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDetailArticle } from '../../Redux/Actions/getDatailArticle';
import { useParams } from 'react-router-dom';

import { Avatar, Rating, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import CardHome from '../../Components/Card/CardHome';

import styles from "./Article.module.css"

export default function Article() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const article = useSelector((state)=> state.articleDetail)

    const ratings = 3.5

    useEffect(()=> {
        dispatch(getDetailArticle(id));
        
    }, [id]);

    console.log(article);    

    function stringAvatar(userHeight, userWidth, userFontSize) {
        // const name = article.user?.name || "Hola"
        // const lastname = article.user?.lastname || "Hola"
         const name = "Hola"
        const lastname = "Hola"
        if (lastname == null) {

            return {
                sx: {
                bgcolor: "#FF8906",
                height: `${userHeight}`,
                width: `${userWidth}`,
                fontSize: `${userFontSize}`,
                },
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
            children: `${name.charAt(0).toUpperCase()}${lastname.charAt(0).toUpperCase()}`,
        };
        }

    }
    //TODO renderizar rating
  return (
    <div className={styles.container}>
       {!article.asset && 
        <div className={styles.errorBanner}>
            <ErrorOutlineIcon/>
            <h5 className={styles.errorText}>
                Este Artículo se encuentra pausado
            </h5>
        </div>
       } 
 
       {article.asset ?
            <div className={styles.subContainer}>
            <h3 className={styles.title}>
                {article.title}
            </h3>
            <NavLink 
                to={`/VendedorPublico/${article.UserIdUser}`}
                style={{textDecoration: 'none'}}
            >
                <h5 className={styles.legend}>
                    Por {article.user?.name} {article.user?.lastname}
                </h5>
            </NavLink>
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
       : <div className={styles.subContainer}>
                <h3 className={styles.titleOff}>
                    {article.title}
                </h3>
                <NavLink 
                    to={`/VendedorPublico/${article.UserIdUser}`}
                    style={{textDecoration: 'none'}}
                >
                <h5 className={styles.legendOff}>
                    Por {article.user?.name} {article.user?.lastname}
                </h5>
                </NavLink>
                    <div className={styles.containerText}>
                        <div className={styles.imageContainer}>
                            <img 
                                src={`${article.img}`}
                                alt="img_publication" 
                                className={styles.image}    
                            />
                        </div>
                        <div className={styles.containerParagraph}>
                            <h3 className={styles.subtitleOff}>
                                {article.subtitle}
                            </h3>
                            <p className={styles.textOff}>
                                {article.text}
                            </p>
                        </div>
                    </div>
                    {(article.subtitleTwo || article.subtitleThree)  && 
                    <div className={styles.containersubText}>
                        {article.subtitleTwo && 
                            <div className={styles.containerParagraph}>
                                <h3 className={styles.subtitleOff}>
                                    {article.subtitleTwo} 
                                </h3>
                                <p className={styles.textOff}>
                                    {article.textTwo}
                                </p>
                        </div>
                        }
                        {article.subtitleThree && 
                            <div className={styles.containerParagraph}>
                                <h3 className={styles.subtitleOff}>
                                    {article.subtitleThree} 
                                </h3>
                                <p className={styles.textOff}>
                                    {article.textThree}
                                </p>
                            </div>
                        }
                    </div>
                    }
            </div> 
       }
  

      <div className={styles.subContainerInfo}>
          <div className={styles.subModule}>
            <h3 className={styles.subtitle}>
                Acerca de {article.user?.name}
            </h3>
            <div className={styles.userInfo} >
                <Avatar {...stringAvatar( '80px', '80px', '40px')} />
                <div className={styles.containerName}>
                    <NavLink 
                        to={`/VendedorPublico/${article.UserIdUser}`}
                        style={{textDecoration: 'none'}}
                    >
                        <h5 className={styles.userName}>
                            {article.user?.name} {article.user?.lastname}
                        </h5>
                    </NavLink>
                   
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
            <p>{article.user?.description}  </p>
          </div>
          {/* {article.user?.Courses.length >= 1 && 
          <div className={styles.subModule}>
            <h3 className={styles.subtitle}>
                Cursos de {article.user?.name}
                <div className={styles.coursesContainer}>
                    {article.user?.Courses.map((curso) => (
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
            } */}
      </div>


   
    </div>
  )
}
