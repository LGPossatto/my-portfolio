import { useState } from "react";

import { getRandomColor } from "../utils/getRandomColor";
import Logo from "../assets/icons/logo.svg";

import { Drawer } from "./Drawer";
import styles from "../styles/components/Nav.module.scss";

export const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const openCloseDrawer = () => {
    setMenuActive(!menuActive);
  };

  const goTo = (path: string) => {
    console.log(path);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <Logo />
      </div>
      <ul>
        <li onClick={() => goTo("/projetos")}>
          Projetos<span style={{ color: getRandomColor() }}>Projetos</span>
        </li>
        <li onClick={() => goTo("/sobre-mim")}>
          Sobre Mim<span style={{ color: getRandomColor() }}>Sobre Mim</span>
        </li>
        <li onClick={() => goTo("/contato")}>
          Contato<span style={{ color: getRandomColor() }}>Contato</span>
        </li>
      </ul>
      <div className={styles.burg} onClick={openCloseDrawer}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer
        closeOnClick
        openCloseDrawer={openCloseDrawer}
        drawerActive={menuActive}
      >
        <ul className={styles["burg-list"]}>
          <li onClick={() => goTo("/projetos")}>
            Projetos<span style={{ color: getRandomColor() }}>Projetos</span>
          </li>
          <li onClick={() => goTo("/sobre-mim")}>
            Sobre Mim<span style={{ color: getRandomColor() }}>Sobre Mim</span>
          </li>
          <li onClick={() => goTo("/contato")}>
            Contato<span style={{ color: getRandomColor() }}>Contato</span>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};
