import { useState } from "react";

import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";

import styles from "../../styles/components/carousel/ImgCarousel.module.scss";
import { ImgDisplay } from "./ImgDisplay";
import { Carousel } from "./Carousel";

const imgObjects = [
  {
    img: img1,
    title: "ABC",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi inventore, voluptatum accusamus ea molestiae provident eius. Animi perspiciatis quos omnis placeat! Hic pariatur, delectus laboriosam quaerat odit ipsam tempore!",
  },
  {
    img: img2,
    title: "123",
    desc: "Quis perferendis quia enim! Corporis ipsam ipsa corrupti recusandae eos incidunt, dignissimos, quod labore quis, doloremque velit beatae pariatur. Exercitationem magnam magni ipsum sit, obcaecati delectus dignissimos suscipit aut laboriosam!",
  },
  {
    img: img3,
    title: "!@#",
    desc: "Quos modi provident dolores atque dicta est obcaecati nobis repudiandae voluptatibus repellat. Quae ipsa facere similique delectus, doloribus dolorem accusantium cumque minima incidunt et distinctio recusandae veniam! Eius, molestiae pariatur.",
  },
  {
    img: img4,
    title: "ABC",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi inventore, voluptatum accusamus ea molestiae provident eius. Animi perspiciatis quos omnis placeat! Hic pariatur, delectus laboriosam quaerat odit ipsam tempore!",
  },
  {
    img: img5,
    title: "123",
    desc: "Quis perferendis quia enim! Corporis ipsam ipsa corrupti recusandae eos incidunt, dignissimos, quod labore quis, doloremque velit beatae pariatur. Exercitationem magnam magni ipsum sit, obcaecati delectus dignissimos suscipit aut laboriosam!",
  },
  {
    img: img1,
    title: "!@#",
    desc: "Quos modi provident dolores atque dicta est obcaecati nobis repudiandae voluptatibus repellat. Quae ipsa facere similique delectus, doloribus dolorem accusantium cumque minima incidunt et distinctio recusandae veniam! Eius, molestiae pariatur.",
  },
  {
    img: img2,
    title: "ABC",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eligendi inventore, voluptatum accusamus ea molestiae provident eius. Animi perspiciatis quos omnis placeat! Hic pariatur, delectus laboriosam quaerat odit ipsam tempore!",
  },
  {
    img: img3,
    title: "123",
    desc: "Quis perferendis quia enim! Corporis ipsam ipsa corrupti recusandae eos incidunt, dignissimos, quod labore quis, doloremque velit beatae pariatur. Exercitationem magnam magni ipsum sit, obcaecati delectus dignissimos suscipit aut laboriosam!",
  },
  {
    img: img4,
    title: "!@#",
    desc: "Quos modi provident dolores atque dicta est obcaecati nobis repudiandae voluptatibus repellat. Quae ipsa facere similique delectus, doloribus dolorem accusantium cumque minima incidunt et distinctio recusandae veniam! Eius, molestiae pariatur.",
  },
];
const imgList = [img1, img2, img3, img4, img5, img1, img2, img3, img4];

export const ImgCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <ImgDisplay
        activeIndex={activeIndex}
        imgObjects={imgObjects}
      ></ImgDisplay>
      <Carousel
        imgList={imgList}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></Carousel>
    </div>
  );
};
