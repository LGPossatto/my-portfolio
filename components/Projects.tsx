import styles from "../styles/components/Projects.module.scss";
import { DoubleText } from "./DoubleText";
import { Line } from "./Line";
import { LineBtn } from "./LineBtn";
import { ProjectsFav } from "./ProjectsFav";
import { ProjectsFilter } from "./ProjectsFilter";
import { ProjectsList } from "./ProjectsList";

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <section className={styles.projects}>
        <div className={styles.tabs}>
          <LineBtn
            text="Destaques"
            onClick={() => console.log("destaques")}
            active
            width="fill"
          ></LineBtn>
          <LineBtn
            text="Tudo"
            onClick={() => console.log("tudo")}
            width="fill"
          ></LineBtn>
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
