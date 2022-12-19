import { useState } from "react";

import Logo from "../assets/icons/logo.svg";

import styles from "../styles/components/Nav.module.scss";
import { Drawer } from "./Drawer";
import { DoubleText } from "./DoubleText";

export const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const openCloseDrawer = () => {
    setMenuActive(!menuActive);
  };

  const goTo = (path: string) => {
    console.log(path);
  };

  const getMenuList = () => {
    return (
      <>
        <li onClick={() => goTo("/projetos")}>
          <DoubleText text="Projetos"></DoubleText>
        </li>
        <li onClick={() => goTo("/sobre-mim")}>
          <DoubleText text="Sobre"></DoubleText>
        </li>
        <li onClick={() => goTo("/contato")}>
          <DoubleText text="Contato"></DoubleText>
        </li>
      </>
    );
  };

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <Logo />
      </div>
      <ul>{getMenuList()}</ul>
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
        <ul className={styles["burg-list"]}>{getMenuList()}</ul>
      </Drawer>
    </nav>
  );
};
