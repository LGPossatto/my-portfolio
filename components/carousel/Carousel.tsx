import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import useWindowDimensions from "../../custom-hooks/useWindowDimensions ";

import { Colors } from "../../utils/Colors";

import styles from "../../styles/components/carousel/Carousel.module.scss";
import { ArrowBtn } from "../buttons/ArrowBtn";

interface props {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  imgList: string[];
}

export const Carousel = ({ activeIndex, setActiveIndex, imgList }: props) => {
  const { width } = useWindowDimensions();
  const [imgIndex, setImgIndex] = useState(0);
  const [listEndIndex, setListEndIndex] = useState(0);
  const [stepSize, setStepSize] = useState(26.7);
  const [color, setColor] = useState("#202020");

  const leftClick = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  const rightClick = () => {
    if (imgIndex < listEndIndex) {
      setImgIndex(imgIndex + 1);
    }
  };

  const getEndIndex = () => {
    if (width <= 480) {
      setStepSize(55);
      if (imgList.length >= 2) {
        setListEndIndex(imgList.length - 2);
      } else {
        setListEndIndex(0);
      }
    } else {
      setStepSize(26.7);
      if (imgList.length >= 4) {
        setListEndIndex(imgList.length - 4);
      } else {
        setListEndIndex(0);
      }

      if (imgIndex >= listEndIndex) {
        setImgIndex(listEndIndex);
      }
    }
  };

  useEffect(() => {
    setColor(Colors.getRandomColor());
  }, []);

  useEffect(() => {
    setImgIndex(0);
    getEndIndex();
  }, [imgList]);

  useEffect(() => {
    getEndIndex();
  }, [width]);

  return (
    <div className={styles.container}>
      <div
        className={styles.top}
        style={{ transform: `translateX(calc(-${stepSize}% * ${imgIndex}))` }}
      >
        {imgList.map((imgName, i) => (
          <div
            className={`${styles.image} ${
              i === activeIndex ? styles.active : ""
            }`}
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            <Image src={`/images/${imgName}.jpg`} alt="Project Image" fill />
          </div>
        ))}
      </div>
      <div className={styles.bot}>
        <ArrowBtn onClick={leftClick} left></ArrowBtn>
        <span>
          <span
            style={{
              width: `calc((100% / ${listEndIndex}) * ${imgIndex})`,
              backgroundColor: color,
            }}
          ></span>
        </span>
        <ArrowBtn onClick={rightClick}></ArrowBtn>
      </div>
    </div>
  );
};
