import { useContext, useEffect } from "react";

import { FilterProvider } from "../context/filter/FilterContext";
import { ProjectsContext } from "../context/projects/ProjectsContext";

import WipIcon from "../assets/icons/wip.svg";

import styles from "../styles/pages/Home.module.scss";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Line } from "../components/misc/Line";
import { Projects } from "../components/projects/Projects";

export default function Home() {
  const { getFavProjects, getRestProjects } = useContext(ProjectsContext);
  const age = Math.floor(
    (new Date().getTime() - new Date("1994-12-07").getTime()) / 3.15576e10
  );

  useEffect(() => {
    getFavProjects();
    getRestProjects();
  }, []);

  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Line colorTemp="cold"></Line>
      <Header></Header>
      <Line colorTemp="hot"></Line>
      <FilterProvider>
        <Projects></Projects>
      </FilterProvider>
      <Line colorTemp="cold"></Line>
      <section className={styles.about} id="sobre">
        <span></span>
        <h2>Sobre Mim</h2>
        <p>
          Olá, me chamo Luiz Gustavo, tenho {age} anos e sou formado em
          engenharia elétrica. Estou buscando um emprego como desenvolvedor web,
          onde eu possa usar meus conhecimentos e continuar aprendendo. Tenho
          boas habilidades de trabalho em equipe, sou organizado, comprometido e
          estou sempre disposto a aprender coisas novas.
        </p>
        <p className={styles.midp}>
          Uma das principais características que me chamam atenção na
          programação é sua flexibilidade e a necessidade de estar sempre
          aprendendo e buscando coisas novas.
        </p>
        <p>
          Não possuo experiencia direta na área, mas estou disposto e empolgado
          a me dedicar ao trabalho e aos estudos necessários.
        </p>
      </section>
      <Line colorTemp="hot"></Line>
      <section className={styles.wip}>
        <WipIcon></WipIcon>
        <h6>Work in Progress</h6>
      </section>
      <Footer></Footer>
    </div>
  );
}
