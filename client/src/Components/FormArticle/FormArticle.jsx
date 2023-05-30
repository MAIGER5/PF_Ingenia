import { useState, Fragment } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { validationArticle } from "./validations"

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Typography, Alert, Snackbar  } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from "./FormArticle.module.css";

export default function FormArticle() {

    const user = useSelector((state) => state.localStorageData);
    const navigate = useNavigate(); 

    const [productImg, setProductImg] = useState("");
    const [previewSource, setPreviewSource] = useState();
    const [isAlert, setIsAlert] = useState(false); 

    const [article, setArticle] = useState({
        title: "",
        subtitle: "",
        text: "",
        img:"",
        subtitleTwo:"",
        textTwo: "",
        subtitleThree: "",
        textThree: "",
    });
    const [errors, setErrors] = useState({
            title: "",
            subtitle: "",
            text: "",
            subtitleTwo:"",
            textTwo: "",
            subtitleThree: "",
            textThree: "",
    });

    const handleSubmit = async(event) => {
        event.preventDefault();
        let id;
    
        article.idUser = user.idUser
        article.img = productImg
        await axios.post(
            `${import.meta.env.VITE_HOST}/instructor/publication`,
            article
        ).then(async (response) => {
            id = response.data?.idPublications
        })
      
       
        setArticle({
            title: "",
            subtitle: "",
            text: "",
            img:"",
            subtitleTwo:"",
            textTwo: "",
            subtitleThree: "",
            textThree: "",
        }) 
        setProductImg("")
        setPreviewSource("")
        setIsAlert(true)
        setTimeout(() => {
            navigate(`/Article/${id}`)
        }, 1000);
      
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setArticle({
        ...article,
        [name]: value,
        });
        setErrors(
        validationArticle({
            ...article,
            [name]: value,
        })
        )
    }

    const handleProductImageUpload = (event) => {
        const file = event.target.files[0];
        TransformFileData(file);
        previewFile(file)   
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };
    
    const TransformFileData = (file) => {
        const reader = new FileReader();
    
        if (file) {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setProductImg(reader.result);
          };
        } else {
          setProductImg("");
        }
    }

    //Tooltip para el usuario
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
    }));

  return (
    <form 
    className={styles.form}
    onSubmit={handleSubmit}
    >
        {isAlert && (<Snackbar open={isAlert} autoHideDuration={2000} onClose={()=>setIsAlert(false)}>
            <Alert 
                variant="filled" severity="success"
            >
                Tu artículo se ha creado con éxito
            </Alert>
        </Snackbar>)}
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.inputContainer}>
                <Typography color="secondary" sx={{ fontSize: "13px"}}>
                    Tamaño max de 5MB
                </Typography>
                <label className={styles.inputImageLabel}> 
                    Seleccionar Imagen
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleProductImageUpload}
                        className={styles.inputImage}
                    />
                </label>
                </div>
                {!productImg && 
                    <div>
                        <ErrorOutlineIcon
                            color="secondary"
                            sx={{ 
                                width: "15px",
                                marginRight: "5px",
                                marginBottom: "-7px" 
                            }}
                        />
                        <p className={styles.errorImage}>
                            Agrega una imagen para tu artículo 
                        </p>
                    </div>
                }
                {previewSource && (
                    <img
                        src={previewSource}
                        alt="chosen"
                        style={{ 
                        height: '300px', width: '600px' 
                        }}
                    />
                )} 
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Ingresá un título que cautive a las personas"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">Título</Typography>
                    </HtmlTooltip>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Escribe aquí el título de tu artículo"
                        value={article.title}
                        onChange={handleInput}
                        className={styles.input}
                    />
                    {errors.title && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.title}
                        </p>
                    }
                </div> 
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Ingresa el subtítulo de tu publicación"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">Subtítulo</Typography>
                    </HtmlTooltip>
                    <input 
                        type="text"
                        name="subtitle" 
                        placeholder="Escribe aquí el subtitulo de tu artículo"
                        value={article.subtitle}
                        onChange={handleInput}
                        className={styles.input}
                    />
                    {errors.subtitle && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.subtitle}
                        </p>
                    }
                </div> 
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Aquí ingresa el texto del primer párrafo de tu publicación"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Primer Párrafo
                        </Typography>
                    </HtmlTooltip>
                    <textarea
                        type="text" 
                        placeholder="Ingresa el texto del primer párrafo de tu publicación"
                        name="text"
                        value={article.text}
                        onChange={handleInput}
                        className={styles.textareaMedium}
                    />
                    {errors.text && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.text}
                        </p>
                    }   
                </div>        
            </div>
            <div className={styles.subContainer}>  
            <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Ingresa el segundo subtítulo de tu publicación"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">Segundo Subtítulo (opcional)</Typography>
                    </HtmlTooltip>
                    <input 
                        type="text" 
                        placeholder="Escribe aquí el subtitulo de tu artículo"
                        name="subtitleTwo"
                        value={article.subtitleTwo}
                        onChange={handleInput}
                        className={styles.input}
                    />
                    {errors.subtitleTwo && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.subtitleTwo}
                        </p>
                    } 
                </div> 
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Aquí ingresa el texto del segundo párrafo de tu publicación"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Segundo Párrafo (opcional)
                        </Typography>
                    </HtmlTooltip>
                    <textarea
                        type="text" 
                        placeholder="Ingresa el texto del segundo párrafo de tu publicación"
                        name="textTwo"
                        value={article.textTwo}
                        onChange={handleInput}
                        className={styles.textareaMedium}
                    />
                    {errors.textTwo && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.textTwo}
                        </p>
                    } 
                </div> 
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Ingresa el tercer subtítulo de tu publicación"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">Tercer Subtítulo (opcional)</Typography>
                    </HtmlTooltip>
                    <input 
                        type="text" 
                        placeholder="Escribe aquí el subtitulo de tu artículo"
                        name="subtitleThree"
                        value={article.subtitleThree}
                        onChange={handleInput}
                        className={styles.input}
                    />
                    {errors.subtitleThree && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.subtitleThree}
                        </p>
                    } 
                </div> 
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Aquí ingresa el texto del tercer párrafo de tu publicación"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Tercer Párrafo (opcional)
                        </Typography>
                    </HtmlTooltip>
                    <textarea
                        type="text" 
                        placeholder="Ingresa el texto del tercer párrafo de tu publicación"
                        name="textThree"
                        value={article.textThree}
                        onChange={handleInput}
                        className={styles.textareaMedium}
                    />
                    {errors.textThree && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.textThree}
                        </p>
                    } 
                </div> 
            </div>     
        </div>

        {Object.entries(errors).length === 0 && productImg ?
            <button className={styles.button}  type="submit">
                <span className={styles.button_text}>Publicar Artículo</span>
            </button>
            : <button className={styles.buttonOff} disabled>
                <span className={styles.button_text}>Publicar Artículo</span>
            </button>
        }  
    </form>
  )
}
