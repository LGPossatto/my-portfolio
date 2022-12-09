import styles from "../styles/components/Projects.module.scss";

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <section className={styles.projects}>
        <div className={styles.tabs}>
          <div className={styles.fav}>
            Destaques<span></span>
          </div>
          <div className={styles.rest}>
            Tudo<span></span>
          </div>
        </div>
      </section>
    </section>
  );
};
