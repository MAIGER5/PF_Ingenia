import FormPublication from "../../Components/FormPublication/FormPublication";
import styles from "./PostPublication.module.css";

export default function PostPublication() {
  return (
    <div className={styles.container}>
    <div className={styles.subContainer}>
        <h3 className={styles.title}>
            Crear Publicación
        </h3>
    </div>
    <FormPublication />
   
</div>
  )
}
