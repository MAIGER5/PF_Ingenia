import FormArticle from "../../Components/FormArticle/FormArticle"
import styles from "./PostArticle.module.css"

export default function PostArticle(    ) {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <h3 className={styles.title}>
                Publica un Artículo
            </h3>
        </div>
        <FormArticle />
       
    </div>
  )
}
