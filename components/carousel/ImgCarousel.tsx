import { useState } from "react";

import { IProjectsData } from "../../data/projectsData";

import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";

import styles from "../../styles/components/carousel/ImgCarousel.module.scss";
import { ImgDisplay } from "./ImgDisplay";
import { Carousel } from "./Carousel";

const imgList = [img1, img2, img3, img4, img5, img1, img2, img3, img4];

interface props {
  project: IProjectsData;
}

export const ImgCarousel = ({ project }: props) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
