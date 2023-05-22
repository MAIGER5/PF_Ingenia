import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { categoryOptions } from "./validations";


import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Typography, Alert, Snackbar  } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import styles from "./FormCourse.module.css";

export default function FormCourseCopy() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [lenguage, setLenguage] = useState("")
    const [price, setPrice] = useState("")
    const [pro, setPro] = useState(false)
    const [duration, setDuration] = useState("")
    const [content, setContent] = useState("")
    const [dificulty, setDificulty] = useState("")
    const [requirement, setRequirement] = useState("")
    const [learnTo, setLearnTo] = useState([])
    const [studyMethod, setStudyMethod] = useState("")
    const [productImg, setProductImg] = useState("");
    const [category, setCategory] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    //TODO : agregar delivery Method
    const [deliveryMethod, setDeliveryMethod] = useState("");

    const [isAlert, setIsAlert] = useState(false); 
    const navigate = useNavigate(); 

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log({
            title,
            description,
            image: productImg,
            lenguage,
            price,
            pro,
            duration, 
            content,
            dificulty,
            requirement,
            learnTo: learnTo,
            studyMethod
          });

        if(!title || 
            !description || 
            !lenguage || 
            !price || 
            !duration ||
            !content ||
            !dificulty ||
            !requirement ||
            !learnTo ||
            !studyMethod ||
            !productImg ||
            !category ||
            !previewSource ) {
            setIsAlert(true)
            return
        }
           
            await axios.post(
              `http://localhost:3001/courses/`,
              {
                title,
                description,
                image: productImg,
                lenguage,
                price,
                pro,
                duration, 
                content,
                dificulty,
                requirement,
                learnTo: learnTo.split(','),
                studyMethod,
                catego: category,
              }  
            ).then(async (response) => {
                console.log(response);
                let id = response.data?.idCourse
                navigate(`/DetailCourse/${id}`)
                // setPreviewSource('')
                // setProductImg('');
                // setTitle('')
                // setDescription('')
                // setLenguage('')
                // setPrice('')
                // setPro('')
                // setDuration('')
                // setContent('')
                // setDificulty('')
                // setRequirement('')
                // setCategory('')
                // setLearnTo('')
                // setDeliveryMethod('')
                //window.location.reload()
            })
    }

    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
        TransformFileData(file);
        previewFile(file)   
    };

    const handlePromo = () => {
        if(pro === true) setPro(false);
        if(pro === false) setPro(true);
    }

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
    };

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
                variant="filled" severity="error"
            >
                Debes de llenar todos lo campos
            </Alert>
        </Snackbar>)}
        <div className={styles.container}>
            <div className={styles.subContainer}>
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
                        <Typography color="secondary">Título de tu publicación</Typography>
                    </HtmlTooltip>
                    <input 
                        type="text" 
                        placeholder="Título tu publicación"
                        onChange={(e) => setTitle(e.target.value)}
                        className={styles.input}
                    />
                </div> 
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Describe de que trata tu curso, los motivos del porqué estudiarlo"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Describe tu publicación
                        </Typography>
                    </HtmlTooltip>
                    <input 
                        type="text" 
                        placeholder="Describe tu publicación"
                        onChange={(e) => setDescription(e.target.value)}
                        className={styles.input}
                    />
                </div>       
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Responde a la pregunta qué encontrarán en tu curso"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Contenido de tu publicación
                        </Typography>
                    </HtmlTooltip>
                    <textarea
                    type="text" 
                    placeholder="Contenido de tu publicación"
                    onChange={(e) => setContent(e.target.value)}
                    className={styles.textarea}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                             {"Describe una vez que una persona compre tu curso, cómo podrá disfrutarlo, a través de qué plataforma será, etc."}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Método de entrega
                        </Typography>
                    </HtmlTooltip>
                    <textarea  
                        placeholder="Método de Entrega"
                        onChange={(e) => setStudyMethod(e.target.value)}
                        className={styles.textarea}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            <Typography color="inherit">Sólo lo verán quienes adquiran tu curso</Typography>
                            {"Ingresa los pasos a seguir para las personas que compren tu curso"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            <ErrorOutlineIcon 
                                color="secondary" 
                                sx={{
                                    width: "20px",
                                    marginRight: "5px",
                                    marginBottom: "-7px"
                                }}
                            />
                            Realización de entrega
                        </Typography>
                    </HtmlTooltip>
                    <textarea  
                        placeholder="Realización de entrega"
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className={styles.textarea}
                    />
                </div> 
            </div>
            <div className={styles.subContainer}>  
                <div className={styles.subContainerSelect}>
                    <div className={styles.subContainerDivision}>
                        <select
                            onChange={(e) => setDificulty(e.target.value)}
                            className={styles.inputSelect}
                        >
                            <option disabled="" value="">
                            Elige un dificultad
                            </option>
                            <option value="BASIC">Principiante</option>
                            <option value="MEDIUM">Intermedio</option>
                            <option value="ADVANCED">Avanzado</option>
                        </select>
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className={styles.inputSelect}
                        >
                            <option disabled="" value="">
                            Elige una categoria
                            </option>
                            {categoryOptions.map(({idCategory, name}) => (
                                <option value={idCategory} key={idCategory}>
                                {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.subContainerDivision}>
                        <div className={styles.priceContainer}>
                            <input 
                                type="number" 
                                placeholder="Price"
                                onChange={(e) => setPrice(e.target.value)}
                                className={styles.inputPrice}
                            /> 
                            <p className={styles.labelPrice} >
                                $USD
                            </p>
                        </div>
                        <select
                            onChange={(e) => setLenguage(e.target.value)}
                            className={styles.inputSelect}
                        >
                            <option disabled="" value="">
                                Elige un idioma
                            </option>
                            <option value="ESPAÑOL">Español</option>
                            <option value="ENGLISH">Inglés</option>
                        </select>  
                    </div>              
                </div>
                 
                <div className={styles.checkboxContainer}>
                    <input 
                        type="checkbox" 
                        onChange={handlePromo}
                    /> 
                     <HtmlTooltip
                        title={
                        <Fragment>
                            {"Esta promoción tendrá una duración de 20 días naturales, pasados esos días se desactivará la opción y podrás volver a activar tu promoción"}
                        </Fragment>
                        }
                    >
                        <label className={styles.label} >Aplicar promoción de 30% de descuento</label>  
                    </HtmlTooltip>
                </div>
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Puede ser un tiempo estimado de '1 mes', '1 semana, 3 meses', etc."}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Duración estimada
                        </Typography>
                    </HtmlTooltip>
                    <input 
                    type="text" 
                    placeholder="Duración estimada"
                    onChange={(e) => setDuration(e.target.value)}
                    className={styles.input}
                    /> 
                </div>
                
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Describe en este espacio si hay lagún requerimiento tecnológico, de software o conocimientos para iniciar tu curso"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Requerimientos del curso
                        </Typography>
                    </HtmlTooltip>
                    <textarea 
                    placeholder="Escribe aquí los requerimientos"
                    onChange={(e) => setRequirement(e.target.value)}
                    className={styles.textarea}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Ingresa los puntos resumidos de lo que aprenderás en este curso"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                        Lo que aprenderán en el curso
                        </Typography>
                    </HtmlTooltip>
                    <input 
                    type="text" 
                    placeholder="Escribe lo que aprenderán las personas"
                    onChange={(e) => setLearnTo(e.target.value)}
                    className={styles.input}
                    />
                </div>
            </div>     
        </div>

        <button className={styles.button} type="submit">
            <span className={styles.button_text}>Crea tu publicación</span>
        </button>
    </form>
  )
}
