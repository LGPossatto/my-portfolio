import styles from "../styles/components/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles["flex-container"]}>
        <div className={styles.title}>
          <h1>Name Name na Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles["img-box"]}></div>
      </div>
    </header>
  );
};
