import Arrow from "../../assets/icons/chevron-right-solid.svg";
import styles from "../../styles/components/buttons/ArrowBtn.module.scss";

interface props {
  onClick: () => void;
  left?: boolean;
  active?: boolean;
}

export const ArrowBtn = ({ onClick, left = false, active = true }: props) => {
  return (
    <button
      className={`${styles.container} ${left ? styles.left : ""} ${
        active ? "" : styles.inactive
      }`}
      onClick={onClick}
    >
      <Arrow></Arrow>
    </button>
  );
};
