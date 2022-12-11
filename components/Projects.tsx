import styles from "../styles/components/Projects.module.scss";
import { ProjectsFav } from "./ProjectsFav";
import { ProjectsFilter } from "./ProjectsFilter";
import { ProjectsList } from "./ProjectsList";

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
        <div className={styles.list}>
          <ProjectsFilter></ProjectsFilter>
          {/* <ProjectsFav></ProjectsFav> */}
          <ProjectsList></ProjectsList>
        </div>
      </section>
    </section>
  );
};
