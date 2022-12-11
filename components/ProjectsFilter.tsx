import styles from "../styles/components/ProjectsFilter.module.scss";
import { FilterItem } from "./FilterItem";

export const ProjectsFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <FilterItem active></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
        <FilterItem></FilterItem>
      </div>
    </div>
  );
};
