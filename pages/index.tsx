import { useContext, useEffect } from "react";

import { ProjectsContext } from "../context/projects/ProjectsContext";

import styles from "../styles/pages/Home.module.scss";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Line } from "../components/Line";
import { Projects } from "../components/Projects";

export default function Home() {
  const { getProjects } = useContext(ProjectsContext);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Line colorTemp="cold"></Line>
      <Header></Header>
      <Line colorTemp="hot"></Line>
      <Projects></Projects>
      <Line colorTemp="cold"></Line>
      <section className={styles.about} id="sobre">
        <span></span>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          quisquam ipsa maiores dolores quo sapiente iusto cumque magnam, optio
          architecto error, earum ipsam illum? Quas dignissimos minus nostrum
          inventore beatae. Possimus minus voluptatum minima error tempore
          eligendi architecto, suscipit sequi doloremque soluta? Praesentium ea
          necessitatibus ut illum. Commodi nobis repellendus dolor rem voluptas,
          mollitia, voluptatem nam quis voluptatum impedit ipsa. Animi, error
          rem officiis, quisquam modi praesentium expedita quae velit vitae,
          magni blanditiis dolores dolorum ullam. Facilis, rem animi delectus
          placeat, veniam, atque praesentium vel porro aut illum distinctio
          impedit?
        </p>
      </section>
      <Footer></Footer>
    </div>
  );
}
