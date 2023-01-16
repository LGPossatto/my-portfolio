import { useEffect, useState } from "react";

import { Colors } from "../../utils/Colors";

import styles from "../../styles/components/misc/LoadingGrid.module.scss";

interface props {
  flip?: "0" | "90" | "180" | "270";
}

export const LoadingGrid = ({ flip = "0" }: props) => {
  const [color, setColor] = useState("#0004ff");

  useEffect(() => {
    setColor(Colors.getRandomColor());
  }, []);

  return (
    <span
      className={styles.container}
      style={{ transform: `rotate(${flip}deg)` }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <span key={item} style={{ backgroundColor: color }}></span>
      ))}
    </span>
  );
};
