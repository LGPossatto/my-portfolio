import { useContext, useEffect, useState } from "react";

import { IProjectsRest } from "../data/projects";

import { FilterContext } from "../context/filter/FilterContext";
import { ProjectsContext } from "../context/projects/ProjectsContext";

import DangerIcon from "../assets/icons/triangle-exclamation-solid.svg";
import AttetionIcon from "../assets/icons/circle-exclamation-solid.svg";
import CheckIcon from "../assets/icons/circle-check-solid.svg";
import Frown from "../public/assets/illustrations/frown.svg";

import styles from "../styles/components/ProjectsList.module.scss";
import { CollapsingBox } from "./CollapsingBox";
import { ProjectItem } from "./ProjectItem";
import { ArrowBtn } from "./ArrowBtn";
import { DoubleText } from "./DoubleText";
import { IconText } from "./IconText";

export const ProjectsList = () => {
  const { projectsRest } = useContext(ProjectsContext);
  const { tags, tagsNum } = useContext(FilterContext);
  const [pageNumber, setPageNumber] = useState(0);
  const [projectsList, setProjectsList] = useState<IProjectsRest[]>([]);

  useEffect(() => {
    setPageNumber(0);
    setProjectsList(getProjectsList());
  }, [tagsNum]);

  const getProjectsList = () => {
    if (tagsNum > 0) {
      return projectsRest.filter((project) => {
        let matchNum = 0;

        for (let i = 0; i < project.techList.length; i++) {
          if (tags[project.techList[i]]) {
            matchNum++;
          }
        }

        if (matchNum === tagsNum) return project;
      });
    }

    return projectsRest;
  };

  const getProjectsInRange = (
    projects: IProjectsRest[],
    start: number,
    end: number
  ) => {
    const projectsItems = [];

    if (end >= projects.length) end = projects.length - 1;

    for (let i = start; i <= end; i++) {
      projectsItems.push(
        <ProjectItem
          key={i}
          date={projects[i].data}
          desc={projects[i].desc}
          title={projects[i].title}
          href={projects[i].gitLink}
        ></ProjectItem>
      );
    }

    return projectsItems;
  };

  if (!projectsRest) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <CollapsingBox title="Informação">
        <div className={styles.info}>
          <p>
            A aba "tudo" mostra alguns projetos feitos por mim, e, também,
            projetos feitos em cursos. Praticamente todos os projetos aqui foram
            feitos para aprender ou se familiarizar com alguma tecnologia ou
            conceito.
          </p>
          <div>
            <p>Projetos marcados com: </p>
            <p>
              <DangerIcon></DangerIcon> - Foram feitos a mais de 18 meses, e,
              podem não representar minhas atuais habilidades.
            </p>
            <p>
              <AttetionIcon></AttetionIcon> - Foram feitos a mais de 9 meses, e,
              podem não representar muito bem as minhas atuais habilidades.
            </p>
            <p>
              <CheckIcon></CheckIcon> - Foram feitos a menos de 9 meses, e,
              representar bem as minhas atuais habilidades.
            </p>
          </div>
        </div>
      </CollapsingBox>
      {projectsList.length > 0 ? (
        getProjectsInRange(projectsList, pageNumber * 5, pageNumber * 5 + 4)
      ) : (
        <IconText Icon={Frown} text="Nada Encontrado!"></IconText>
      )}
      <div className={styles.pag}>
        <ArrowBtn
          left
          onClick={() => {
            if (pageNumber > 0) setPageNumber(pageNumber - 1);
          }}
          active={pageNumber > 0}
        ></ArrowBtn>
        <span className={styles.num}>
          <DoubleText text={`${pageNumber + 1}`} active></DoubleText>
        </span>
        <ArrowBtn
          onClick={() => {
            if (pageNumber < Math.ceil(projectsList.length / 5) - 1)
              setPageNumber(pageNumber + 1);
          }}
          active={pageNumber < Math.ceil(projectsList.length / 5) - 1}
        ></ArrowBtn>
      </div>
    </div>
  );
};
