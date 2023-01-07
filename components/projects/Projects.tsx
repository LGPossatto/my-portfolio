import { useState } from "react";

import styles from "../../styles/components/projects/Projects.module.scss";
import { ProjectsFav } from "./ProjectsFav";
import { ProjectsList } from "./ProjectsList";
import { LineBtn } from "../buttons/LineBtn";
import { ProjectsFilter } from "./ProjectsFilter";

export const Projects = () => {
  const [isFav, setIsFav] = useState(true);

  return (
    <section className={styles.container} id="projetos">
      <h2>Projetos</h2>
      <section className={styles.projects}>
        <div className={styles.tabs}>
          <LineBtn
            text="Destaques"
            onClick={() => setIsFav(true)}
            active={isFav}
            width="fill"
            colorTemp="cold"
          ></LineBtn>
          <LineBtn
            text="Tudo"
            onClick={() => setIsFav(false)}
            active={!isFav}
            width="fill"
            colorTemp="hot"
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
