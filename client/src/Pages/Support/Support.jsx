import styles from "./Support.module.css";

export default function Support() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
          Soporte
      </h3>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
        </div>  
        <div className={styles.subContainerText}>
          <h3 className={styles.subTitle}>¡Bienvenido a la página de soporte técnico de Ingenia!</h3>
          <p className={styles.text}>
          En Ingenia, nos dedicamos apasionadamente a brindarte la mejor experiencia de aprendizaje en línea. 
          Entendemos que a veces pueden surgir problemas técnicos o preguntas relacionadas con los cursos 
          y estamos aquí para ayudarte.
          </p>
          <p className={styles.text}>
          Si tienes algún problema, inquietud o consulta, nuestro equipo de soporte técnico está listo para 
          asistirte. No importa si necesitas ayuda con el acceso al curso, problemas de visualización de 
          contenido, o cualquier otro tema técnico, estamos aquí para resolverlo.
          </p>
          <p className={styles.text}>
          Comunícate con nuestro equipo de soporte técnico a través del correo electrónico <span className={styles.emailText}>ingenia.info2023@gmail.com</span>.
          Nuestros expertos estarán encantados de brindarte la asistencia necesaria y responder a todas tus preguntas 
          en el menor tiempo posible.
          </p>
        </div>
      
      </div>
   
    </div>
  )
}
