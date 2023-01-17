import Illustration from "../assets/illustrations/software-developer.svg";

import styles from "../styles/components/Header.module.scss";
import { CtaBtn } from "./buttons/CtaBtn";

export const Header = () => {
  const openTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <header className={styles.container}>
      <div className={styles["flex-container"]}>
        <div className={styles.title}>
          <h1>Luiz Gustavo Possatto</h1>
          <p>Engenheiro Eletricista e Programador.</p>
          <div>
            <CtaBtn
              onClick={() => openTab("https://github.com/LGPossatto")}
              text="GitHub"
            ></CtaBtn>
            <CtaBtn
              onClick={() =>
                openTab("https://www.linkedin.com/in/luiz-gustavo-possatto/")
              }
              text="LinkedIn"
            ></CtaBtn>
          </div>
        </div>
        <div className={styles["img-box"]}>
          <Illustration></Illustration>
        </div>
      </div>
    </header>
  );
};
