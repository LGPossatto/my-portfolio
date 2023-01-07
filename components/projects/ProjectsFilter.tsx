import { useContext } from "react";

import { FilterContext } from "../../context/filter/FilterContext";

import styles from "../../styles/components/projects/ProjectsFilter.module.scss";
import { CollapsingBox } from "../boxes/CollapsingBox";
import { ProjectsFilterItem } from "./ProjectsFilterItem";

export const ProjectsFilter = () => {
  const { tags, tagStatusChange } = useContext(FilterContext);

  return (
    <div className={styles.container}>
      <CollapsingBox title="Filtro">
        <div className={styles.items}>
          {Object.keys(tags).map((tag, i) => (
            <ProjectsFilterItem
              key={i}
              name={tag}
              onItemClick={tagStatusChange}
            ></ProjectsFilterItem>
          ))}
        </div>
      </CollapsingBox>
    </div>
  );
};
