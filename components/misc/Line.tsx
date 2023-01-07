import { Colors } from "../../utils/Colors";

import styles from "../../styles/components/misc/Line.module.scss";

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
