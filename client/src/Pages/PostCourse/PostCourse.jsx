import FormCourse from "../../Components/FormCourse/FormCourse";
import styles from "./PostCourse.module.css";

export default function PostCourse() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
          <h3 className={styles.title}>
            Crear Publicación
          </h3>
          <p className={styles.subtitle}>
            Ten todo listo para darte a conocer al mundo. Comienza 3...2..1...
          </p>
          <p className={styles.subtitleInfo}>
            Para poder cautivar a las personas que vean tu publicación, todos los campos son obligatorios
          </p>
          <p className={styles.subtitleInfo}>
            No te preocupes, te guiaremos en el camino
          </p>
      </div>
      <FormCourse />
   
    </div>
  )
}