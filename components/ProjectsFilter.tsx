import styles from "../styles/components/ProjectsFilter.module.scss";
import { CollapsingBox } from "./CollapsingBox";
import { FilterItem } from "./FilterItem";

export const ProjectsFilter = () => {
  return (
    <div className={styles.container}>
      <CollapsingBox title="Filtro">
        <div className={styles.items}>
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
          <FilterItem></FilterItem>
        </div>
      </CollapsingBox>
    </div>
  );
};
