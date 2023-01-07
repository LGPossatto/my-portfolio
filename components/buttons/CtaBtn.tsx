import { useEffect, useState } from "react";

import styles from "../../styles/components/buttons/CtaBtn.module.scss";
import { Colors } from "../../utils/Colors";
import { DoubleText } from "../misc/DoubleText";

interface props {
  text: string;
  onClick: () => void;
}

export const CtaBtn = ({ text, onClick }: props) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState("#fafafa");

  const setNewColor = () => {
    setColor(Colors.getRandomColor());
  };

  useEffect(() => {
    setNewColor();
  }, []);

  return (
    <button
      className={styles.container}
      onClick={onClick}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        //setNewColor();
      }}
    >
      <DoubleText text={text} active={hover} color={color}></DoubleText>

      <span className={styles["border-top"]}></span>
      <span
        className={styles["border-bot"]}
        style={{ borderColor: color }}
      ></span>
    </button>
  );
};
