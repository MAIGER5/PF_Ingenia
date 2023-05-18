import { useState } from "react";
import axios from "axios";
import { categoryOptions } from "./validations";
import styles from "./FormCourse.module.css"

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
            learnTo: learnTo.split(','),
            studyMethod
          });

        try {
            const response = await axios.post(
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
                studyMethod
              }  
            );
            setPreviewSource('')
            setProductImg('');
            setTitle('')
            setDescription('')
            setLenguage('')
            setPrice('')
            setPro('')
            setDuration('')
            setContent('')
            setDificulty('')
            setRequirement('')
            setCategory('')
            setLearnTo('')
      
            return response.data;
          } catch (error) {
            console.log(error);
          }
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
    

  return (
    <form 
    className={styles.form}
    onSubmit={handleSubmit}
    >
        <label className={styles.inputImageLabel}> 
            Seleccionar Imagen
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleProductImageUpload}
                className={styles.inputImage}
                required
            />
        </label>
       
        {previewSource && (
            <img
                src={previewSource}
                alt="chosen"
                style={{ 
                  height: '300px', MaxWidth: '700px' 
                }}
            />
        )}

        <div className={styles.container}>
            <input 
                type="text" 
                placeholder="Título de tu publicación"
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
            />
            <input 
                type="text" 
                placeholder="Describe tu publicación"
                onChange={(e) => setDescription(e.target.value)}
                className={styles.input}
            />
            <textarea
                type="text" 
                placeholder="Contenido de tu publicación"
                onChange={(e) => setContent(e.target.value)}
                className={styles.textarea}
            />
            <textarea  
                placeholder="Método de estudio"
                onChange={(e) => setStudyMethod(e.target.value)}
                className={styles.textarea}
            />
            <textarea  
                placeholder="Método de Entrega"
                className={styles.textarea}
            />
            <textarea  
                placeholder="Realización de entrega"
                className={styles.textarea}
            />
        </div>
        <div className={styles.container}>      
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
                {categoryOptions.map(({value, name}) => (
                    <option value={value} key={value}>
                    {name}
                    </option>
                ))}
            </select>
            <input 
                type="number" 
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
                className={styles.input}
            />  
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
            <div className={styles.checkboxContainer}>
                <input 
                    type="checkbox" 
                    onChange={handlePromo}
                /> 
                <label className={styles.label} >Aplicar promoción de 30% de descuento</label>  
            </div>
         
            <input 
                type="text" 
                placeholder="Duración estimada"
                onChange={(e) => setDuration(e.target.value)}
                className={styles.input}
            /> 
            <textarea 
                placeholder="requirement"
                onChange={(e) => setRequirement(e.target.value)}
                className={styles.textarea}
            />
            <input 
                type="text" 
                placeholder="learnTo"
                onChange={(e) => setLearnTo(e.target.value)}
                className={styles.input}
            />
        </div>       
       
        <button className={styles.button} type="submit">
            <span className={styles.button_text}>Crea tu publicación</span>
        </button>
    </form>
  )
}
