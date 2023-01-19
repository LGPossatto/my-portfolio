import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../../styles/components/carousel/ImgDisplay.module.scss";

interface props {
  activeIndex: number;
  imgObjects: { imgName: string; title: string; desc: string }[];
}

export const ImgDisplay = ({ activeIndex, imgObjects }: props) => {
  const [flipDeg, setFlipDeg] = useState(0);
  const [isFrontUp, setIsFrontUp] = useState(true);
  const [imgFront, setImgFront] = useState(imgObjects[0].imgName);
  const [imgBack, setImgBack] = useState(imgObjects[0].imgName);

  const onIndexChange = () => {
    if (isFrontUp) {
      setImgBack(imgObjects[activeIndex].imgName);
      setIsFrontUp(false);
    } else {
      setImgFront(imgObjects[activeIndex].imgName);
      setIsFrontUp(true);
    }

    setFlipDeg(flipDeg + 180);
  };

  useEffect(() => {
    onIndexChange();
  }, [activeIndex]);

  useEffect(() => {
    setImgFront(imgObjects[0].imgName);
    setImgBack(imgObjects[0].imgName);
  }, [imgObjects]);

  return (
    <div className={styles.container}>
      <div className={styles["aspect-ratio"]}>
        <div className={styles.inside}>
          <div
            className={styles["flip-card"]}
            style={{ transform: `rotateY(${flipDeg}deg)` }}
          >
            <span className={styles["card-front"]}>
              <Image src={`/images/${imgFront}.jpg`} alt="imagem" fill />
            </span>
            <span className={styles["card-back"]}>
              <Image src={`/images/${imgBack}.jpg`} alt="imagem" fill />
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles.text} ${isFrontUp ? styles.opacityUp : ""}`}>
        <h3>{imgObjects[activeIndex].title}</h3>
        <p>{imgObjects[activeIndex].desc}</p>
      </div>
    </div>
  );
};
