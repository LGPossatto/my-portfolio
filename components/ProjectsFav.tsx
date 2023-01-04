import { useContext } from "react";

import { IFav } from "../data/projects";

import { ProjectsContext } from "../context/projects/ProjectsContext";
import { FilterContext } from "../context/filter/FilterContext";

import styles from "../styles/components/ProjectsFav.module.scss";
import { ProjectCard } from "./ProjectCard";

export const ProjectsFav = () => {
  const { projectsFav } = useContext(ProjectsContext);
  const { tags, tagsNum } = useContext(FilterContext);

  const getProjectCard = (project: IFav, i: number) => {
    return (
      <ProjectCard
        key={i}
        id={project.id}
        title={project.title}
        desc={project.desc}
        colorNum={i}
      ></ProjectCard>
    );
  };

  if (!projectsFav) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      {tagsNum > 0
        ? projectsFav.map((project, index) => {
            let matchNum = 0;

            for (let i = 0; i < project.techList.length; i++) {
              if (tags[project.techList[i]]) {
                matchNum++;
              }
            }

            if (matchNum === tagsNum) return getProjectCard(project, index);
          })
        : projectsFav.map((project, index) => getProjectCard(project, index))}
    </div>
  );
};
