import { useState } from "react";
import Link from "next/link";

import Logo from "../assets/icons/logo.svg";

import styles from "../styles/components/Nav.module.scss";
import { Drawer } from "./boxes/Drawer";
import { DoubleText } from "./misc/DoubleText";

export const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const openCloseDrawer = () => {
    setMenuActive(!menuActive);
  };

  const getMenuList = () => {
    return (
      <>
        <li>
          <Link href={"/#projetos"}>
            <DoubleText text="Projetos" colorTemp="hot"></DoubleText>
          </Link>
        </li>
        <li>
          <Link href={"/#sobre"}>
            <DoubleText text="Sobre" colorTemp="cold"></DoubleText>
          </Link>
        </li>
        <li>
          <Link href={"#contato"}>
            <DoubleText text="Contato" colorTemp="hot"></DoubleText>
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <Link href={"/"}>
          <Logo />
        </Link>
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
