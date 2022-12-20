import styles from "../styles/components/ProjectsFav.module.scss";
import { ProjectCard } from "./ProjectCard";

export const ProjectsFav = () => {
  return (
    <div className={styles.container}>
      <ProjectCard colorNum={0}></ProjectCard>
      <ProjectCard colorNum={1}></ProjectCard>
      <ProjectCard colorNum={2}></ProjectCard>
      <ProjectCard colorNum={3}></ProjectCard>
      <ProjectCard colorNum={4}></ProjectCard>
      <ProjectCard colorNum={5}></ProjectCard>
      <ProjectCard colorNum={6}></ProjectCard>
    </div>
  );
};
