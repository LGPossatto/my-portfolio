import { Colors } from "../../utils/Colors";

import styles from "../../styles/components/misc/DoubleText.module.scss";

interface props {
  text: string;
  active?: boolean;
  color?: string;
  colorTemp?: "hot" | "cold" | undefined;
}

export const DoubleText = ({
  text,
  color,
  active = false,
  colorTemp = undefined,
}: props) => {
  return (
    <div className={`${styles.container} ${active ? styles.active : ""}`}>
      {text}
      <span style={{ color: color ? color : Colors.getRandomColor(colorTemp) }}>
        {text}
      </span>
    </div>
  );
};
