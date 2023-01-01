import { useContext } from "react";

import { ProjectsContext } from "../context/projects/ProjectsContext";
import { projectsData } from "../data/projects";

import styles from "../styles/components/ProjectsFav.module.scss";
import { ProjectCard } from "./ProjectCard";

export const ProjectsFav = () => {
  const { projects } = useContext(ProjectsContext);

  if (!projects) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      {projects.map((project, i) => {
        return (
          <ProjectCard
            key={i}
            id={project.id}
            title={project.title}
            desc={project.desc}
            colorNum={i}
          ></ProjectCard>
        );
      })}
    </div>
  );
};
