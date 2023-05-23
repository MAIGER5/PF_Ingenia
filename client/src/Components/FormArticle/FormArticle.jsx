import { useState, Fragment } from "react";
import axios from "axios";

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Typography, Alert, Snackbar  } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from "./FormArticle.module.css";

export default function FormArticle() {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");    
    const [subtitleTwo, setSubtitleTwo] = useState("");
    const [textTwo, setTextTwo] = useState("");
    const [subtitleThree, setSubtitleThree] = useState("");
    const [textThree, setTextThree] = useState("");
    const [productImg, setProductImg] = useState("");

    const [previewSource, setPreviewSource] = useState();

    const [isAlert, setIsAlert] = useState(false); 

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log({
            idUser: 1,
            title,
            subtitle,
            text,
            img: productImg,
            subtitleTwo,
            textTwo,
            subtitleThree,
            textThree
          });

        if(!title || 
            !subtitle ||
            !text ||
            !productImg ||
            !subtitleTwo ||
            !textTwo ||
            !subtitleThree ||
            !textThree ) {
            return
        }
           
            await axios.post(
              `http://localhost:3001/instructor/publication`,
              {
                idUser: 1,
                title,
                subtitle,
                text,
                img: productImg,
                subtitleTwo,
                textTwo,
                subtitleThree,
                textThree
              }  
            ).then(async (response) => {
                console.log(response);
                //let id = response.data?.idCourse
                //navigate(`/DetailCourse/${id}`)
                //let id = response.data?.idCourse
                //navigate(`/DetailCourse/${id}`)
            })
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
                            {"Ingresá un título que cautive a las personas"}
                        </Fragment>
                        }
                    >
                        <Typography color="secondary">Título de tu publicación</Typography>
                    </HtmlTooltip>
                    <input 
                        type="text" 
                        placeholder="Título tu publicación"
                        onChange={(e) => setSubtitle(e.target.value)}
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
                    <textarea
                        type="text" 
                        placeholder="Describe tu publicación"
                        onChange={(e) => setText(e.target.value)}
                        className={styles.textareaMedium}
                    />
                </div>               
            </div>
            <div className={styles.subContainer}>  
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
                        onChange={(e) => setSubtitleTwo(e.target.value)}
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
                    <textarea
                        type="text" 
                        placeholder="Describe tu publicación"
                        onChange={(e) => setSubtitleTwo(e.target.value)}
                        className={styles.textareaMedium}
                    />
                </div> 
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
                        onChange={(e) => setSubtitleThree(e.target.value)}
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
                    <textarea
                        type="text" 
                        placeholder="Describe tu publicación"
                        onChange={(e) => setSubtitleTwo(e.target.value)}
                        className={styles.textareaMedium}
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
