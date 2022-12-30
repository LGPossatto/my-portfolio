import styles from "../styles/components/DoubleText.module.scss";
import { Colors } from "../utils/Colors";

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
