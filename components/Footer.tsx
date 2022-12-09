import styles from "../styles/components/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <span className={styles.background}></span>
      <span className={styles["dec-l-1"]}></span>
      <span className={styles["dec-l-2"]}></span>
      <span className={styles["dec-l-3"]}></span>
      <span className={styles["dec-r-1"]}></span>
      <span className={styles["dec-r-2"]}></span>
      <span className={styles["dec-r-3"]}></span>
      Footer
    </footer>
  );
};
