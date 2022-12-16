import { getRandomColor } from "../utils/getRandomColor";
import styles from "../styles/components/Line.module.scss";

export const Line = () => {
  return (
    <div className={styles.container}>
      <span className={styles.top}></span>
      <span
        className={styles.bot}
        style={{ backgroundColor: getRandomColor() }}
      ></span>
    </div>
  );
};
