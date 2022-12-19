import { useEffect, useState } from "react";
import { getRandomColor } from "../utils/getRandomColor";

import styles from "../styles/components/LineBtn.module.scss";

interface props {
  text: string;
  active?: boolean;
  onClick: () => void;
  width?: "auto" | "fill";
}

export const LineBtn = ({
  text,
  onClick,
  active = false,
  width = "auto",
}: props) => {
  const [color, setColor] = useState("#fafafa");

  useEffect(() => {
    setColor(getRandomColor());
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
