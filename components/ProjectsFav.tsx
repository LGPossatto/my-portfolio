import { projectsData } from "../data/projects";

import styles from "../styles/components/ProjectsFav.module.scss";
import { ProjectCard } from "./ProjectCard";

export const ProjectsFav = () => {
  return (
    <div className={styles.container}>
      {projectsData.map((project, i) => (
        <ProjectCard
          key={i}
          id={project.id}
          title={project.title}
          desc={project.desc}
          colorNum={i}
        ></ProjectCard>
      ))}
    </div>
  );
};
