import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProjectsContext } from "../../../context/projects/ProjectsContext";

import { IProjectsInfo, projectsData } from "../../../data/projects";
import img1 from "../../../assets/images/img-1.jpg";
import img2 from "../../../assets/images/img-2.jpg";
import img3 from "../../../assets/images/img-3.jpg";
import img4 from "../../../assets/images/img-4.jpg";
import img5 from "../../../assets/images/img-5.jpg";

import styles from "../../../styles/pages/Projects.module.scss";
import { Line } from "../../../components/Line";
import { Nav } from "../../../components/Nav";
import { Footer } from "../../../components/Footer";
import { CtaBtn } from "../../../components/CtaBtn";
import { Carousel } from "../../../components/Carousel";
import { ImgDisplay } from "../../../components/ImgDisplay";
import { ProjectCard } from "../../../components/ProjectCard";
import { DateBlock } from "../../../components/DateBlock";

const imgObjects = [
  {
    img: img1,
    title: "ABC",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi inventore, voluptatum accusamus ea molestiae provident eius. Animi perspiciatis quos omnis placeat! Hic pariatur, delectus laboriosam quaerat odit ipsam tempore!",
  },
  {
    img: img2,
    title: "123",
    desc: "Quis perferendis quia enim! Corporis ipsam ipsa corrupti recusandae eos incidunt, dignissimos, quod labore quis, doloremque velit beatae pariatur. Exercitationem magnam magni ipsum sit, obcaecati delectus dignissimos suscipit aut laboriosam!",
  },
  {
    img: img3,
    title: "!@#",
    desc: "Quos modi provident dolores atque dicta est obcaecati nobis repudiandae voluptatibus repellat. Quae ipsa facere similique delectus, doloribus dolorem accusantium cumque minima incidunt et distinctio recusandae veniam! Eius, molestiae pariatur.",
  },
  {
    img: img4,
    title: "ABC",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi inventore, voluptatum accusamus ea molestiae provident eius. Animi perspiciatis quos omnis placeat! Hic pariatur, delectus laboriosam quaerat odit ipsam tempore!",
  },
  {
    img: img5,
    title: "123",
    desc: "Quis perferendis quia enim! Corporis ipsam ipsa corrupti recusandae eos incidunt, dignissimos, quod labore quis, doloremque velit beatae pariatur. Exercitationem magnam magni ipsum sit, obcaecati delectus dignissimos suscipit aut laboriosam!",
  },
  {
    img: img1,
    title: "!@#",
    desc: "Quos modi provident dolores atque dicta est obcaecati nobis repudiandae voluptatibus repellat. Quae ipsa facere similique delectus, doloribus dolorem accusantium cumque minima incidunt et distinctio recusandae veniam! Eius, molestiae pariatur.",
  },
  {
    img: img2,
    title: "ABC",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi inventore, voluptatum accusamus ea molestiae provident eius. Animi perspiciatis quos omnis placeat! Hic pariatur, delectus laboriosam quaerat odit ipsam tempore!",
  },
  {
    img: img3,
    title: "123",
    desc: "Quis perferendis quia enim! Corporis ipsam ipsa corrupti recusandae eos incidunt, dignissimos, quod labore quis, doloremque velit beatae pariatur. Exercitationem magnam magni ipsum sit, obcaecati delectus dignissimos suscipit aut laboriosam!",
  },
  {
    img: img4,
    title: "!@#",
    desc: "Quos modi provident dolores atque dicta est obcaecati nobis repudiandae voluptatibus repellat. Quae ipsa facere similique delectus, doloribus dolorem accusantium cumque minima incidunt et distinctio recusandae veniam! Eius, molestiae pariatur.",
  },
];
const imgList = [img1, img2, img3, img4, img5, img1, img2, img3, img4];

export default function Projects() {
  const { projectsInfo, getProjectById } = useContext(ProjectsContext);
  const [project, setProject] = useState<IProjectsInfo | undefined>(undefined);
  const [activeIndex, setActiveIndex] = useState(0);
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

  if (!projectsInfo[pid as string]) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Line></Line>
      <section className={styles.project}>
        <div className={styles["page-top"]}>
          <div className={styles["top-left"]}>
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
          </div>
          <div className={styles["top-right"]}>
            <h4>
              Destaques<span>A</span>
            </h4>
            <div>
              {projectsData.map((project, i) => (
                <ProjectCard
                  key={i}
                  title={project.title}
                  desc={project.desc}
                  id={project.id}
                  colorNum={i}
                ></ProjectCard>
              ))}
            </div>
          </div>
        </div>
        <ImgDisplay
          activeIndex={activeIndex}
          imgObjects={imgObjects}
        ></ImgDisplay>
        <Carousel
          imgList={imgList}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        ></Carousel>
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
