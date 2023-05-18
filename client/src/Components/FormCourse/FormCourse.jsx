import { useState } from "react";
import axios from "axios";
import styles from "./FormCourse.module.css"

export default function FormCourse() {


    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [course, setCourse] = useState({
        title:"",
        description:"",
        image: "",
        lenguage:"",
        price:"",
        pro:false,
        duration:"", 
        content:"",
        dificulty:"",
        requirement:"",
        learnTo:[],
        studyMethod:""
    })

    const handleSubmit = async(event) => {
        event.preventDefault();
        let imagen;
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            //uploadImage(reader.result);
            // course.image = reader.result
            imagen = reader.result
            //console.log("normal", reader.result)
        };
        reader.onerror = () => {
            console.error("There is an error");
        };
        course.learnTo = course.learnTo.split(','); 
        course.price = Number(course.price)
        course.image = imagen
        console.log("inicial",course);
        // await axios.post('http://localhost:3001/courses/', course,{
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // })
        // .then((response) => {
        //     console.log(response.data)
        //   })
        //   .catch((error) => {
        //     console.log(error.response?.data);
        //   });

        // await axios.post('http://localhost:3001/courses/', JSON.stringify(course))
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        //     .catch((error) => {
        //         console.log(error.response?.data);
        // });
       
        // await axios({
        //     method: 'POST', url: 'http://localhost:3001/courses/'
        //     , data: { course }
        //     , headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then((response) => {
        //     console.log(response.data)
        //     })
        //     .catch((error) => {
        //     console.log(error.response?.data);
        // });

        // try {
        //     await fetch('http://localhost:3001/courses/', {
        //         method: 'POST',
        //         body: JSON.stringify({ data: course }),
        //         headers: { 'Content-Type': 'application/json' },
        //     });
        //     setFileInputState('');
        //     setPreviewSource('');

        // } catch (err) {
        //     console.error(err);
          
        // }

        setFileInputState('');
        setPreviewSource('');
        console.log(course);
        setCourse({
            title:"",
            description:"",
            image:"",
            lenguage:"",
            price:"",
            pro:false,
            duration:"", 
            content:"",
            dificulty:"",
            requirement:"",
            learnTo:[],
            studyMethod:""
        })
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setCourse({
            ...course,
            [name]: value
        });
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            // await fetch('/api/upload', {
            //     method: 'POST',
            //     body: JSON.stringify({ data: base64EncodedImage }),
            //     headers: { 'Content-Type': 'application/json' },
            // });
            setFileInputState('');
            setPreviewSource('');

        } catch (err) {
            console.error(err);
          
        }
    };

  return (
    <form 
    className={styles.form}
    onSubmit={handleSubmit}
    >
        <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
        />
        {previewSource && (
            <img
                src={previewSource}
                alt="chosen"
                style={{ height: '300px' }}
            />
        )}
        <input 
            type="text" 
            placeholder="title"
            name="title"
            value={course.title}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="description"
            name="description"
            value={course.description}
            onChange={handleInput}
            className={styles.input}
        />
         <input 
            type="text" 
            placeholder="lenguage"
            name="lenguage"
            value={course.lenguage}
            onChange={handleInput}
            className={styles.input}
        />
         <input 
            type="number" 
            placeholder="price"
            name="price"
            value={course.price}
            onChange={handleInput}
            className={styles.input}
        />
        {/* Pro */}
        <input 
            type="text" 
            placeholder="duration"
            name="duration"
            value={course.duration}
            onChange={handleInput}
            className={styles.input}
        />
          <input 
            type="text" 
            placeholder="Content"
            name="content"
            value={course.content}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="Difficulty"
            name="dificulty"
            value={course.dificulty}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="requirement"
            name="requirement"
            value={course.requirement}
            onChange={handleInput}
            className={styles.input}
        />
         <input 
            type="text" 
            placeholder="learnTo"
            name="learnTo"
            value={course.learnTo}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="studyMethod"
            name="studyMethod"
            value={course.studyMethod}
            onChange={handleInput}
            className={styles.input}
        />
        {/* catego */}
        <button className={styles.button} type="submit">
            <span className={styles.button_text}>Crea tu publicación</span>
        </button>
    </form>
  )
}
