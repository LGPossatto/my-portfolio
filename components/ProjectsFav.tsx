import styles from "../styles/components/ProjectsFav.module.scss";
import { ProjectCard } from "./ProjectCard";

export const ProjectsFav = () => {
  return (
    <div className={styles.container}>
      <ProjectCard></ProjectCard>
    </div>
  );
};
