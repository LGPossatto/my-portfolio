import { useState } from "react";

import styles from "../styles/components/Projects.module.scss";
import { LineBtn } from "./LineBtn";
import { ProjectsFilter } from "./ProjectsFilter";
import { ProjectsFav } from "./ProjectsFav";
import { ProjectsList } from "./ProjectsList";

export const Projects = () => {
  const [isFav, setIsFav] = useState(true);

  return (
    <section className={styles.container}>
      <h2>Projetos</h2>
      <section className={styles.projects}>
        <div className={styles.tabs}>
          <LineBtn
            text="Destaques"
            onClick={() => setIsFav(true)}
            active={isFav}
            width="fill"
          ></LineBtn>
          <LineBtn
            text="Tudo"
            onClick={() => setIsFav(false)}
            active={!isFav}
            width="fill"
          ></LineBtn>
        </div>
        <div className={styles.list}>
          <ProjectsFilter></ProjectsFilter>

          {isFav ? <ProjectsFav></ProjectsFav> : <ProjectsList></ProjectsList>}
        </div>
      </section>
    </section>
  );
};
