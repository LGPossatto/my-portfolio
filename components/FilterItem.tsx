import { useState } from "react";
import Icon from "../assets/icons/javascript.svg";

import styles from "../styles/components/FilterItem.module.scss";
import { Checkbox } from "./Checkbox";

interface props {}

export const FilterItem = ({}: props) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container} onClick={() => setActive(!active)}>
      <Checkbox active={active}></Checkbox>
      <div className={styles.info}>
        <p>FilterItem</p>
        <Icon></Icon>
      </div>
    </div>
  );
};
