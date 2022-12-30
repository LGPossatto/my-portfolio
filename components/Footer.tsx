import styles from "../styles/components/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <span className={styles.background}></span>
      <span className={styles["dec-l-1"]}></span>
      <span className={styles["dec-l-2"]}></span>
      <span className={styles["dec-l-3"]}></span>
      <span className={styles["dec-l-4"]}></span>
      <span className={styles["dec-r-1"]}></span>
      <span className={styles["dec-r-2"]}></span>
      <span className={styles["dec-r-3"]}></span>
      <span className={styles["dec-r-4"]}></span>
      <div className={styles.content}>
        <section className={styles.info} id="contato">
          <h4>Contato</h4>
          <p>
            <strong>Email:</strong> lgpossatto@gmail.com
          </p>
          <p>
            <strong>Celular | Whatsapp:</strong>
            {" (55) 45 99838-9983"}
          </p>
          <p>
            <strong>Currículo:</strong> Link 1
          </p>
          <p>
            <strong>Mais:</strong> Link 2
          </p>
        </section>
        <section className={styles.qr}></section>
        <section className={styles.thanks}>
          <h6>{"“Obrigado por acessar meu portfólio“"}</h6>
        </section>
      </div>
    </footer>
  );
};
