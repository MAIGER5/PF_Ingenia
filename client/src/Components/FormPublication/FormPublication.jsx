import { useState } from "react";
import styles from "./FormPublication.module.css"

export default function FormPublication() {

    const [publication, setPublication] = useState({
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
        studyMethod:"",
        catego :[] 
    })

    const handleSubmit = async(event) => {
        event.preventDefault();
     
        // axios.post('http://localhost:3001/user/created', user)
        // .then(res => console.log("res", res))
        // .catch((error) => {
        //     console.log(error);
        // });
        console.log(publication)
        setPublication({
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
            studyMethod:"",
            catego :[] 
        })
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        setPublication({
            ...publication,
            [name]: value
        });
    }


  return (
    <form 
    className={styles.form}
    onSubmit={handleSubmit}
    >
        <input 
            type="text" 
            placeholder="Selecciona tu imagen"
            name="image"
            value={publication.image}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="title"
            name="title"
            value={publication.title}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="description"
            name="description"
            value={publication.description}
            onChange={handleInput}
            className={styles.input}
        />
        {/* Lenguage */}
         <input 
            type="number" 
            placeholder="price"
            name="price"
            value={publication.price}
            onChange={handleInput}
            className={styles.input}
        />
        {/* Pro */}
        <input 
            type="text" 
            placeholder="duration"
            name="duration"
            value={publication.duration}
            onChange={handleInput}
            className={styles.input}
        />
          <input 
            type="text" 
            placeholder="Content"
            name="content"
            value={publication.content}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="Difficulty"
            name="dificulty"
            value={publication.dificulty}
            onChange={handleInput}
            className={styles.input}
        />
        <input 
            type="text" 
            placeholder="requirement"
            name="requirement"
            value={publication.requirement}
            onChange={handleInput}
            className={styles.input}
        />
        {/* learn to */}
        <input 
            type="text" 
            placeholder="studyMethod"
            name="studyMethod"
            value={publication.studyMethod}
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
