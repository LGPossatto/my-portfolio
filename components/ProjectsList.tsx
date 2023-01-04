import { useContext, useState } from "react";

import { FilterContext } from "../context/filter/FilterContext";
import { ProjectsContext } from "../context/projects/ProjectsContext";

import DangerIcon from "../assets/icons/triangle-exclamation-solid.svg";
import AttetionIcon from "../assets/icons/circle-exclamation-solid.svg";
import CheckIcon from "../assets/icons/circle-check-solid.svg";

import styles from "../styles/components/ProjectsList.module.scss";
import { CollapsingBox } from "./CollapsingBox";
import { ProjectItem } from "./ProjectItem";
import { ArrowBtn } from "./ArrowBtn";
import { DoubleText } from "./DoubleText";

export const ProjectsList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [endPagNum, setEndPagNum] = useState(0);
  const { projectsRest } = useContext(ProjectsContext);
  const { tags, tagsNum } = useContext(FilterContext);

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

  const getProjectsInRange = (start: number, end: number) => {
    const projectsList = getProjectsList();
    const projectsItems = [];

    if (end >= projectsList.length) end = projectsList.length - 1;
    //setEndPagNum(Math.ceil(projectsList.length / 5));

    for (let i = start; i <= end; i++) {
      projectsItems.push(
        <ProjectItem
          key={i}
          date={projectsList[i]!.data}
          desc={projectsList[i]!.desc}
          title={projectsList[i]!.title}
          href={projectsList[i]!.gitLink}
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
              <DangerIcon></DangerIcon> - Foram feitos a mais de 1 ano, e, podem
              não representar minhas atuais habilidades.
            </p>
            <p>
              <AttetionIcon></AttetionIcon> - Foram feitos a mais de 6 meses, e,
              podem não representar muito bem as minhas atuais habilidades.
            </p>
            <p>
              <CheckIcon></CheckIcon> - Foram feitos a menos de 6 meses, e,
              representar bem as minhas atuais habilidades.
            </p>
          </div>
        </div>
      </CollapsingBox>
      {getProjectsInRange(pageNumber * 5, pageNumber * 5 + 4)}
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
            if (pageNumber < endPagNum - 1) setPageNumber(pageNumber + 1);
          }}
          active={pageNumber < endPagNum - 1}
        ></ArrowBtn>
      </div>
    </div>
  );
};
