import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import useWindowDimensions from "../custom-hooks/useWindowDimensions ";

import { getRandomColor } from "../utils/getRandomColor";

import img from "../assets/images/placeholder.jpg";
import styles from "../styles/components/Carousel.module.scss";
import { ArrowBtn } from "./ArrowBtn";

interface props {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const Carousel = ({ activeIndex, setActiveIndex }: props) => {
  const { width } = useWindowDimensions();
  const [imgIndex, setImgIndex] = useState(0);
  const [listEndIndex, setListEndIndex] = useState(0);
  const [stepSize, setStepSize] = useState(26.7);
  const [color, setColor] = useState("#202020");

  const imgList = [img, img, img, img, img, img, img, img, img, img];

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

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  useEffect(() => {
    if (width <= 480) {
      setStepSize(55);
      setListEndIndex(imgList.length - 2);
    } else {
      setStepSize(26.7);
      setListEndIndex(imgList.length - 4);

      if (imgIndex >= listEndIndex) {
        setImgIndex(listEndIndex);
      }
    }
  }, [width]);

  return (
    <div className={styles.container}>
      <div
        className={styles.top}
        style={{ transform: `translateX(calc(-${stepSize}% * ${imgIndex}))` }}
      >
        {imgList.map((img, i) => (
          <div
            className={`${styles.image} ${
              i === activeIndex ? styles.active : ""
            }`}
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            <Image src={img} alt="Project Image" />
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
