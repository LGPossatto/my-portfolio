import { useContext, useEffect, useState } from "react";

import { IFav } from "../../data/projectsData";

import { ProjectsContext } from "../../context/projects/ProjectsContext";
import { FilterContext } from "../../context/filter/FilterContext";

import Frown from "../../assets/illustrations/frown.svg";

import styles from "../../styles/components/projects/ProjectsFav.module.scss";
import { ProjectsFavCard } from "./ProjectsFavCard";
import { IconText } from "../misc/IconText";
import { LoadingGrid } from "../misc/LoadingGrid";

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

  if (projectsFav.length <= 0) return <LoadingGrid></LoadingGrid>;

  return (
    <div
      className={`${styles.container} ${
        projectsList.length > 0 ? "styles" : styles["grid-one"]
      }`}
    >
      {projectsList.length > 0 ? (
        projectsList.map((project, i) => (
          <ProjectsFavCard
            key={i}
            id={project.id}
            title={project.title}
            desc={project.desc}
            colorNum={projectsFav.indexOf(project)}
          ></ProjectsFavCard>
        ))
      ) : (
        <IconText Icon={Frown} text="Nada Encontrado!"></IconText>
      )}
    </div>
  );
};
