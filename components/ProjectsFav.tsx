import { useContext, useEffect, useState } from "react";

import { IFav } from "../data/projects";

import { ProjectsContext } from "../context/projects/ProjectsContext";
import { FilterContext } from "../context/filter/FilterContext";

import Frown from "../public/assets/illustrations/frown.svg";

import styles from "../styles/components/ProjectsFav.module.scss";
import { ProjectCard } from "./ProjectCard";
import { IconText } from "./IconText";

export const ProjectsFav = () => {
  const { projectsFav } = useContext(ProjectsContext);
  const { tags, tagsNum } = useContext(FilterContext);
  const [projectsList, setProjectsList] = useState<IFav[]>([]);

  useEffect(() => {
    setProjectsList(getProjectsList());
  }, [projectsFav, tagsNum]);

  const getProjectsList = () => {
    if (tagsNum > 0) {
      return projectsFav.filter((project) => {
        let matchNum = 0;

        for (let i = 0; i < project.techList.length; i++) {
          if (tags[project.techList[i]]) {
            matchNum++;
          }
        }

        if (matchNum === tagsNum) return project;
      });
    }

    return projectsFav;
  };

  if (!projectsFav) return <div>loading...</div>;

  return (
    <div
      className={`${styles.container} ${
        projectsList.length > 0 ? "styles" : styles["grid-one"]
      }`}
    >
      {projectsList.length > 0 ? (
        projectsList.map((project, i) => (
          <ProjectCard
            key={i}
            id={project.id}
            title={project.title}
            desc={project.desc}
            colorNum={i}
          ></ProjectCard>
        ))
      ) : (
        <IconText Icon={Frown} text="Nada Encontrado!"></IconText>
      )}
    </div>
  );
};
