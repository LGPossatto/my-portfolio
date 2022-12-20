import styles from "../styles/components/ProjectsList.module.scss";
import { ProjectItem } from "./ProjectItem";

export const ProjectsList = () => {
  return (
    <div className={styles.container}>
      <ProjectItem
        title="Name name name Name"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit."
        date="12/07/2007"
      ></ProjectItem>
      <ProjectItem
        title="Name name name Name"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit."
        date="12/07/2007"
      ></ProjectItem>
      <ProjectItem
        title="Name name"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date="12/07/2007"
      ></ProjectItem>
    </div>
  );
};
