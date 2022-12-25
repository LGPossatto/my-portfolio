import { useState } from "react";

import img1 from "../../assets/images/placeholder.jpg";
import img2 from "../../assets/images/img-1.jpg";
import img3 from "../../assets/images/img-2.jpg";

import styles from "../../styles/pages/Projects.module.scss";
import { Line } from "../../components/Line";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { CtaBtn } from "../../components/CtaBtn";
import { Carousel } from "../../components/Carousel";
import { ImgDisplay } from "../../components/ImgDisplay";

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
];
const imgList = [img1, img2, img3, img1, img2, img3, img1, img2, img3];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Line></Line>
      <section className={styles.project}>
        <h1>Name na Mename</h1>
        <div className={styles.info}>
          <span>
            <strong>Tecnologias:</strong> Tech 1, Tech 2, Tech 3, Tech 4, Tech 5
          </span>
          <span>
            <strong>Stack:</strong> FullStack
          </span>
          <span>
            <strong>Data:</strong> 05/08/2020
          </span>
        </div>
        <div className={styles.desc}>
          <h2>Sobre o projeto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ex odio provident nemo magnam, molestiae quod, ut quos nisi nulla
            libero quae rerum. Eos ipsum ullam consequuntur, dignissimos dicta
            magni. Illo nulla quasi, esse quae corporis, totam sit error laborum
            saepe earum veniam repellat voluptates voluptatum a. Quia dolores
            alias molestiae quasi totam rem deleniti, saepe aut perferendis
            accusantium doloribus! Error, optio deserunt? Modi eos fugiat
            voluptatem possimus aliquid unde in beatae earum aliquam, illo
            voluptas aperiam. Corrupti tenetur quas aut saepe sequi delectus rem
            ab vero eaque? Aliquid, corporis?
          </p>
        </div>
        <ImgDisplay
          activeIndex={activeIndex}
          imgObjects={imgObjects}
        ></ImgDisplay>
        <Carousel
          imgList={imgList}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        ></Carousel>
        <div className={styles.btn}>
          <CtaBtn
            text="Voltar aos projetos"
            onClick={() => console.log("button")}
          ></CtaBtn>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}