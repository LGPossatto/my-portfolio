import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProjectsContext } from "../../../context/projects/ProjectsContext";

import { IProjectsInfo, projectsData } from "../../../data/projects";

import styles from "../../../styles/pages/Projects.module.scss";
import { Line } from "../../../components/misc/Line";
import { Nav } from "../../../components/Nav";
import { Footer } from "../../../components/Footer";
import { CtaBtn } from "../../../components/buttons/CtaBtn";
import { ProjectsFavCard } from "../../../components/projects/ProjectsFavCard";
import { DateBlock } from "../../../components/misc/DateBlock";
import { ImgCarousel } from "../../../components/carousel/ImgCarousel";
import { LoadingGrid } from "../../../components/misc/LoadingGrid";

export default function Projects() {
  const { projectsInfo, getProjectById } = useContext(ProjectsContext);
  const [project, setProject] = useState<IProjectsInfo | undefined>(undefined);
  const router = useRouter();
  const { pid } = router.query;

  const getProject = (pid: string) => {
    if (!projectsInfo[pid]) {
      getProjectById(pid);
    } else {
      setProject(projectsInfo[pid]);
    }
  };

  useEffect(() => {
    getProject(pid as string);
  }, [pid, projectsInfo]);

  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Line colorTemp="cold"></Line>
      <section className={styles.project}>
        <div className={styles["page-top"]}>
          <div className={styles["top-left"]}>
            {projectsInfo[pid as string] ? (
              <>
                <h1>{project?.title}</h1>
                <div className={styles.info}>
                  <span>
                    <strong>Tecnologias:</strong> {project?.techList.join(", ")}
                  </span>
                  <span>
                    <strong>Stack:</strong> {project?.stack}
                  </span>
                  <span>
                    <strong>Data:</strong>{" "}
                    <DateBlock date={project?.date}></DateBlock>
                  </span>
                </div>
                <div className={styles.desc}>
                  <h2>Sobre o projeto</h2>
                  {project?.textList.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </>
            ) : (
              <LoadingGrid></LoadingGrid>
            )}
          </div>
          <div className={styles["top-right"]}>
            <h4>
              Destaques<span>A</span>
            </h4>
            <div>
              {projectsData.map((project, i) => (
                <ProjectsFavCard
                  key={i}
                  title={project.title}
                  desc={project.desc}
                  id={project.id}
                  colorNum={i}
                ></ProjectsFavCard>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          {projectsInfo[pid as string] ? (
            <ImgCarousel></ImgCarousel>
          ) : (
            <LoadingGrid flip="270"></LoadingGrid>
          )}
        </div>
        <div className={styles.btn}>
          <CtaBtn
            text="Voltar aos projetos"
            onClick={() => router.push("/")}
          ></CtaBtn>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
