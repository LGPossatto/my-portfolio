import styles from "../styles/components/Line.module.scss";
import { Colors } from "../utils/Colors";

interface props {
  colorTemp?: "hot" | "cold" | undefined;
}

export const Line = ({ colorTemp = undefined }: props) => {
  return (
    <div className={styles.container}>
      <span className={styles.top}></span>
      <span
        className={styles.bot}
        style={{ backgroundColor: Colors.getRandomColor(colorTemp) }}
      ></span>
    </div>
  );
};
