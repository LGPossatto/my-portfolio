import { useEffect, useState } from "react";

import { IProjectsData } from "../../data/projectsData";

import styles from "../../styles/components/carousel/ImgCarousel.module.scss";
import { ImgDisplay } from "./ImgDisplay";
import { Carousel } from "./Carousel";

interface props {
  project: IProjectsData;
}

export const ImgCarousel = ({ project }: props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  return (
    <div className={styles.container}>
      <ImgDisplay
        activeIndex={activeIndex}
        imgObjects={project.imgList}
      ></ImgDisplay>
      <Carousel
        imgList={project.imgList.map((item) => item.imgName)}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></Carousel>
    </div>
  );
};
