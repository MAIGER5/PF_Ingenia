import { useState } from "react";
import styles from "./FormArticle.module.css";

export default function FormArticle() {

    const [article, setArticle] = useState({
        image: "",
        title1: "",
        subtitle1: "",
        text1: "",
        title2: "",
        subtitle2: "",
        text2: "",
        title3: "",
        subtitle3: "",
        text3: "",
    })

    const [fileImage, setfileImage] = useState("");
    const [fileInputState, setfileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState();

    const handleSubmit = async(event) => {
        event.preventDefault();
     
        // axios.post('http://localhost:3001/user/created', user)
        // .then(res => console.log("res", res))
        // .catch((error) => {
        //     console.log(error);
        // });

        if(!previewSource) return;
        uploadImage(previewSource);

        console.log(article)
        setArticle({
            image: "",
            title1: "",
            subtitle1: "",
            text1: "",
            title2: "",
            subtitle2: "",
            text2: "",
            title3: "",
            subtitle3: "",
            text3: "",
        })
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setArticle({
            ...article,
            [name]: value
        });
    }

    const handleFileImage = (event) => {
        const file = event.target.files[0];
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    const uploadImage = async(base64EncondedImage) => {
        console.log(base64EncondedImage)
        // try {
        //     await fetch('http://localhost:3001/courses/upload', {
        //         method: "POST",
        //         body: JSON.stringify({data: base64EncondedImage}),
        //         headers: {'content-type': "application/json"}
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    }

  return (
    <form 
    className={styles.form}
    onSubmit={handleSubmit}
    >
        {/* <input 
            type="text" 
            placeholder="Selecciona tu imagen"
            name="image"
            value={article.image}
            onChange={handleInput}
            className={styles.input}
        /> */}
        <input 
            type="file"
            name="image"
            onChange={handleFileImage}
            value={fileInputState}
            className={styles.input}

        />
        {previewSource && (
            <img 
                src={previewSource} 
                alt="preview"  
                style={{height: "300px" }}
            />
        )}

        <input 
            type="text" 
            placeholder="title1"
            name="title1"
            value={article.title1}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="subtitle1"
            name="subtitle1"
            value={article.subtitle1}
            onChange={handleInput}
            className={styles.input}
        />
          <input 
            type="text" 
            placeholder="text1"
            name="text1"
            value={article.text1}
            onChange={handleInput}
            className={styles.input}
        />
         <input 
            type="text" 
            placeholder="title2"
            name="title2"
            value={article.title2}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="subtitle2"
            name="subtitle2"
            value={article.subtitle2}
            onChange={handleInput}
            className={styles.input}
        />
          <input 
            type="text" 
            placeholder="text2"
            name="text2"
            value={article.text2}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="title3"
            name="title3"
            value={article.title3}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="subtitle3"
            name="subtitle3"
            value={article.subtitle3}
            onChange={handleInput}
            className={styles.input}
        />
          <input 
            type="text" 
            placeholder="text3"
            name="text3"
            value={article.text3}
            onChange={handleInput}
            className={styles.input}
        />
        <button className={styles.button} type="submit">
            <span className={styles.button_text}>Crea tu publicación</span>
        </button>
    </form>
  )
}
