import FormCourse from "../../Components/FormCourse/FormCourse";
import styles from "./PostCourse.module.css";

export default function PostCourse() {
  return (
    <div className={styles.container}>
    <div className={styles.subContainer}>
        <h3 className={styles.title}>
          Crear Publicación
        </h3>
    </div>
    <FormCourse />
   
</div>
  )
}
