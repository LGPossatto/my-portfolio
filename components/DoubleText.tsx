import styles from "../styles/components/DoubleText.module.scss";
import { getRandomColor } from "../utils/getRandomColor";

interface props {
  text: string;
  active?: boolean;
}

export const DoubleText = ({ text, active = false }: props) => {
  return (
    <div className={`${styles.container} ${active ? styles.active : ""}`}>
      {text}
      <span style={{ color: getRandomColor() }}>{text}</span>
    </div>
  );
};
