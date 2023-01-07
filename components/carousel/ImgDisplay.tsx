import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "../../styles/components/carousel/ImgDisplay.module.scss";

interface props {
  activeIndex: number;
  imgObjects: { img: StaticImageData; title: string; desc: string }[];
}

export const ImgDisplay = ({ activeIndex, imgObjects }: props) => {
  const [flipDeg, setFlipDeg] = useState(0);
  const [isFrontUp, setIsFrontUp] = useState(true);
  const [imgFront, setImgFront] = useState(imgObjects[activeIndex].img);
  const [imgBack, setImgBack] = useState(imgObjects[activeIndex].img);

  const onIndexChange = () => {
    if (isFrontUp) {
      setImgBack(imgObjects[activeIndex].img);
      setIsFrontUp(false);
    } else {
      setImgFront(imgObjects[activeIndex].img);
      setIsFrontUp(true);
    }

    setFlipDeg(flipDeg + 180);
  };

  useEffect(() => {
    onIndexChange();
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      <div className={styles["aspect-ratio"]}>
        <div className={styles.inside}>
          <div
            className={styles["flip-card"]}
            style={{ transform: `rotateY(${flipDeg}deg)` }}
          >
            <span className={styles["card-front"]}>
              <Image src={imgFront} alt="img1" />
            </span>
            <span className={styles["card-back"]}>
              <Image src={imgBack} alt="img2" />
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
