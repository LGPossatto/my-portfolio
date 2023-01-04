import { useContext } from "react";

import { FilterContext } from "../context/filter/FilterContext";

import styles from "../styles/components/ProjectsFilter.module.scss";
import { CollapsingBox } from "./CollapsingBox";
import { FilterItem } from "./FilterItem";

export const ProjectsFilter = () => {
  const { tags, tagStatusChange } = useContext(FilterContext);

  return (
    <div className={styles.container}>
      <CollapsingBox title="Filtro">
        <div className={styles.items}>
          {Object.keys(tags).map((tag, i) => (
            <FilterItem
              key={i}
              name={tag}
              onItemClick={tagStatusChange}
            ></FilterItem>
          ))}
        </div>
      </CollapsingBox>
    </div>
  );
};
