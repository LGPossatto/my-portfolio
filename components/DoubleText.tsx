import styles from "../styles/components/DoubleText.module.scss";
import { getRandomColor } from "../utils/getRandomColor";

interface props {
  text: string;
  active?: boolean;
  color?: string;
}

export const DoubleText = ({ text, color, active = false }: props) => {
  return (
    <div className={`${styles.container} ${active ? styles.active : ""}`}>
      {text}
      <span style={{ color: color ? color : getRandomColor() }}>{text}</span>
    </div>
  );
};
