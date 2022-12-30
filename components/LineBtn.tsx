import { useEffect, useState } from "react";
import { Colors } from "../utils/Colors";

import styles from "../styles/components/LineBtn.module.scss";

interface props {
  text: string;
  active?: boolean;
  onClick: () => void;
  width?: "auto" | "fill";
  colorTemp?: "hot" | "cold" | undefined;
}

export const LineBtn = ({
  text,
  onClick,
  active = false,
  width = "auto",
  colorTemp = undefined,
}: props) => {
  const [color, setColor] = useState("#fafafa");

  useEffect(() => {
    setColor(Colors.getRandomColor(colorTemp));
  }, []);

  return (
    <div
      className={`${styles.container} ${active ? styles.active : ""} ${
        width === "fill" ? styles.fill : ""
      }`}
      onClick={onClick}
    >
      <div className={styles.text}>
        {text}
        <span style={{ color: color }}>{text}</span>
      </div>
      <div className={styles.line}>
        <span className={styles.top}></span>
        <span className={styles.bot} style={{ backgroundColor: color }}></span>
      </div>
    </div>
  );
};
