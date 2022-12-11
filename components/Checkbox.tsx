import CheckIcon from "../assets/icons/check-solid.svg";

import styles from "../styles/components/Checkbox.module.scss";

interface props {
  active: boolean;
}

export const Checkbox = ({ active }: props) => {
  return (
    <div className={`${styles.container} ${active ? styles.active : ""}`}>
      <span className={styles.check}>
        <CheckIcon></CheckIcon>
      </span>
    </div>
  );
};
