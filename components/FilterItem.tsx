import styles from "../styles/components/FilterItem.module.scss";
import { Checkbox } from "./Checkbox";

interface props {
  active?: boolean;
}

export const FilterItem = ({ active = false }: props) => {
  return (
    <div className={styles.container}>
      <Checkbox active={active}></Checkbox>
      <p>FilterItem</p>
    </div>
  );
};
