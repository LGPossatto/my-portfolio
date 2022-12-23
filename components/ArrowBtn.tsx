import Arrow from "../assets/icons/chevron-right-solid.svg";
import styles from "../styles/components/ArrowBtn.module.scss";

interface props {
  onClick: () => void;
  left?: boolean;
}

export const ArrowBtn = ({ onClick, left = false }: props) => {
  return (
    <button
      className={`${styles.container} ${left ? styles.left : ""}`}
      onClick={onClick}
    >
      <Arrow></Arrow>
    </button>
  );
};
