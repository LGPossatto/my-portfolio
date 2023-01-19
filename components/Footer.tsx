import Image from "next/image";

import qrCode from "../assets/images/whats-qr-code.png";

import styles from "../styles/components/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <span className={styles.background}></span>
      <span className={styles["dec-l-1"]}></span>
      <span className={styles["dec-l-2"]}></span>
      <span className={styles["dec-l-3"]}></span>
      <span className={styles["dec-l-4"]}></span>
      <span className={styles["dec-r-1"]}></span>
      <span className={styles["dec-r-2"]}></span>
      <span className={styles["dec-r-3"]}></span>
      <span className={styles["dec-r-4"]}></span>
      <div className={styles.content}>
        <section className={styles.info} id="contato">
          <h4>Contato</h4>
          <p>
            <strong>Email:</strong> lgpossatto@gmail.com
          </p>
          <p>
            <strong>Celular | Whatsapp:</strong>
            {" (55) 45 99838-9983"}
          </p>
          <p>
            <strong>Currículo:</strong>{" "}
            <a
              href="https://docs.google.com/document/d/1WtM29685RdqS0biA5UFWBZIkHNy6VsNVgz6DX8WUU_E/edit?usp=sharing"
              target="_blank"
            >
              Link
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/LGPossatto" target="_blank">
              Link
            </a>
          </p>
        </section>
        <section className={styles.qr}>
          <Image src={qrCode} alt="qr code" width={240} height={240}></Image>
        </section>
        <section className={styles.thanks}>
          <h6>{"“Obrigado por acessar meu portfólio“"}</h6>
        </section>
      </div>
    </footer>
  );
};
