import styles from "../styles/components/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles["flex-container"]}>
        <div className={styles.title}>
          <h1>Luiz Gustavo Possatto</h1>
          <p>Engenheiro Eletricista e Programador.</p>
        </div>
        <div className={styles["img-box"]}></div>
      </div>
    </header>
  );
};
