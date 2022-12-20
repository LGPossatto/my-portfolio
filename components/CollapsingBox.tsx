import { useState } from "react";

import styles from "../styles/components/CollapsingBox.module.scss";

interface props {
  title: string;
  children?: React.ReactNode;
}

export const CollapsingBox: React.FC<props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span></span>
      </div>
      <span className={`${styles.arrow} ${styles["arrow-up-l"]}`}></span>
      <span className={`${styles.arrow} ${styles["arrow-up-r"]}`}></span>
      <span className={`${styles.arrow} ${styles["arrow-down-l"]}`}></span>
      <span className={`${styles.arrow} ${styles["arrow-down-r"]}`}></span>
      {children}
    </div>
  );
};
