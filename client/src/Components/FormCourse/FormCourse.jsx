import { useState, Fragment } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { categoryOptions, validationCourse } from "./validations";

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Typography, Alert, Snackbar  } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CircleIcon from '@mui/icons-material/Circle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import styles from "./FormCourse.module.css";

export default function FormCourseCopy() {

    const user = useSelector((state) => state.localStorageData);
    const navigate = useNavigate(); 
    const [pro, setPro] = useState(false)
    const [isAlert, setIsAlert] = useState(false); 
    
    const [previewSource, setPreviewSource] = useState("");
    const [productImg, setProductImg] = useState("");
    const [inputText, setInputText] = useState("");
    const [elementos, setElementos] = useState([]);
    const [course, setCourse] = useState({
        title: "",
        description: "",
        image: "",
        lenguage: "",
        price: "",
        pro: "",
        duration: "", 
        content: "",
        dificulty: "",
        requirement: "",
        learnTo: "",
        studyMethod: "",
        users: "",
        catego: "",
    })
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        image: "",
        lenguage: "",
        price: "",
        pro: "",
        duration: "", 
        content: "",
        dificulty: "",
        requirement: "",
        learnTo: "",
        studyMethod: "",
        users: "",
        catego: "",
    });

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(course);

        course.users = user.idUser
        course.image = productImg
        course.pro = pro
        course.learnTo = elementos 
        await axios.post(`${import.meta.env.VITE_HOST}/courses/`,course)
            .then(async (response) => {
                console.log(response);
                let id = response.data?.idCourse
                navigate(`/DetailCourse/${id}`)
            }).catch((error) => {
                // const objetojson = error.request.response;
                // const objeto = JSON.parse(objetojson);
            });
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setCourse({
        ...course,
        [name]: value,
        });
        setErrors(
        validationCourse({
            ...course,
            [name]: value,
        })
        ) 
    }
    
    console.log(course);
    console.log("errors",errors);

    const handleChangeToLearn = event => {
        setInputText(event.target.value);
    };

    const handleAdd = () => {
        if (inputText.trim() !== '') {
        setElementos([...elementos, inputText]);
        setInputText('');
        }
    };

    const handleDelete = index => {
        const newElementos = [...elementos];
        newElementos.splice(index, 1);
        setElementos(newElementos);
    };

    const handlePromo = () => {
        if(pro === true) setPro(false);
        if(pro === false) setPro(true);
    }

    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
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
                            Agrega una imagen para tu publicación 
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
                        <Typography color="secondary">Título de tu publicación</Typography>
                    </HtmlTooltip>
                    <input 
                        type="text" 
                        placeholder="Título tu publicación"
                        name="title"
                        value={course.title}
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
                            {"Describe de que trata tu curso, los motivos del porqué estudiarlo"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                            Describe tu publicación
                        </Typography>
                    </HtmlTooltip>
                    <textarea
                        type="text" 
                        placeholder="Describe tu publicación"
                        name="description"
                        value={course.description}
                        onChange={handleInput}
                        className={styles.textareaMedium}
                    />
                    {errors.description && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.description}
                        </p>
                    }
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
                    placeholder="Contenido de tu publicación"
                    name="content"
                    value={course.content}
                    onChange={handleInput}
                    className={styles.textarea}
                    />
                    {errors.content && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.content}
                        </p>
                    }
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
                        name="studyMethod"
                        value={course.studyMethod}
                        onChange={handleInput}
                        className={styles.textarea}
                    />
                    {errors.studyMethod && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.studyMethod}
                        </p>
                    }
                </div>
            </div>
            <div className={styles.subContainer}>  
                <div className={styles.subContainerSelect}>
                    <div className={styles.subContainerDivision}>
                        <div>    
                            <select
                                name="dificulty"
                                value={course.dificulty}
                                onChange={handleInput}
                                className={styles.inputSelect}
                            >
                                <option disabled="" value="">
                                Elige una dificultad
                                </option>
                                <option value="BASIC">Principiante</option>
                                <option value="MEDIUM">Intermedio</option>
                                <option value="ADVANCED">Avanzado</option>
                            </select>
                            {errors.dificulty && 
                            <p className={styles.errorSmall}>
                                <ErrorOutlineIcon
                                    sx={{ 
                                        width: "15px",
                                        marginRight: "5px",
                                        marginBottom: "-7px" 
                                    }}
                                />
                                {errors.dificulty}
                            </p>
                            }
                        </div>
                        <div>
                            <select
                                name="catego"
                                value={course.catego}
                                onChange={handleInput}
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
                            {errors.catego && 
                                <p className={styles.errorSmall}>
                                    <ErrorOutlineIcon
                                        sx={{ 
                                            width: "15px",
                                            marginRight: "5px",
                                            marginBottom: "-7px" 
                                        }}
                                    />
                                    {errors.catego}
                                </p>
                            }
                        </div>   
                    </div>
                    <div className={styles.subContainerDivision}>
                        <div className={styles.priceContainer}>
                            <div>
                                <input 
                                    type="number" 
                                    placeholder="Price"
                                    name="price"
                                    value={course.price}
                                    onChange={handleInput}
                                    className={styles.inputPrice}
                                /> 
                              
                              
                                {errors.price && 
                                    <p className={styles.errorSmall}>
                                        <ErrorOutlineIcon
                                            sx={{ 
                                                width: "15px",
                                                marginRight: "5px",
                                                marginBottom: "-7px" 
                                            }}
                                        />
                                        {errors.price}
                                    </p>
                                }
                            </div>
                            <p className={styles.labelPrice} >
                                $USD
                            </p>
                         
                        </div>
                        <div>
                            <select
                                name="lenguage"
                                value={course.lenguage}
                                onChange={handleInput}
                                className={styles.inputSelect}
                            >
                                <option disabled="" value="">
                                    Elige un idioma
                                </option>
                                <option value="ESPAÑOL">Español</option>
                                <option value="ENGLISH">Inglés</option>
                            </select> 
                            {errors.lenguage && 
                                <p className={styles.errorSmall}>
                                    <ErrorOutlineIcon
                                        sx={{ 
                                            width: "15px",
                                            marginRight: "5px",
                                            marginBottom: "-7px" 
                                        }}
                                    />
                                    {errors.lenguage}
                                </p>
                            }
                        </div>
                      
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
                    name="duration"
                    value={course.duration}
                    onChange={handleInput}
                    className={styles.input}
                    /> 
                    {errors.duration && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.duration}
                        </p>
                    }
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
                    name="requirement"
                    value={course.requirement}
                    onChange={handleInput}
                    className={styles.textarea}
                    />
                    {errors.requirement && 
                        <p className={styles.error}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            {errors.requirement}
                        </p>
                    }
                </div>
                <div className={styles.inputContainerOptions}>
                    <HtmlTooltip
                        title={
                        <Fragment>
                            {"Ingresa por favor los puntos resumidos de lo que aprenderán en este curso"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">
                        Lo que aprenderán en el curso
                        </Typography>
                    </HtmlTooltip>
                    <div>
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleChangeToLearn}
                            className={styles.inputOptions}
                        />
                        <button 
                            type="button" 
                            onClick={handleAdd}
                            className={styles.buttonOptions}
                        >
                            <AddCircleOutlineIcon 
                                color="secondary" 
                                sx={{
                                    marginBottom: "-6px",
                                    marginLeft: "10px"
                                }}
                            />
                        </button>
                    </div>
                    <div className={styles.listContainer}>
                        <ul className={styles.listLearn}>
                            {elementos.map((elemento, index) => (
                            
                            <li
                                key={index}
                                className={styles.listBullet}
                            >
                                <CircleIcon
                                    color="secondary"
                                    sx={{
                                        marginBottom: "-7px",
                                        marginRight: "10px",
                                        width: "10px"
                                    }}
                                />
                              
                                {elemento}
                          
                                <button 
                                    type="button" 
                                    onClick={() => handleDelete(index)}
                                    className={styles.buttonOptions}
                                >
                                      <RemoveCircleOutlineIcon    
                                        color="secondary"
                                        sx={{
                                            marginBottom: "-5px",
                                            marginLeft: "5px",
                                            width: "18px"
                                        }}
                                    />
                                </button>
                            </li>
                            ))}
                        </ul>
                    </div>
                    {elementos.length === 0 && 
                        <p className={styles.errorSmall}>
                            <ErrorOutlineIcon
                                sx={{ 
                                    width: "15px",
                                    marginRight: "5px",
                                    marginBottom: "-7px" 
                                }}
                            />
                            Este campo es obligatorio
                        </p>
                    }
                    </div>
                </div>
            </div>   

        {Object.entries(errors).length === 0 && productImg && elementos.length != 0 ?
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
