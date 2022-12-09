import Logo from "../assets/icons/logo.svg";

import styles from "../styles/components/Nav.module.scss";

export const Nav = () => {
  const goTo = (path: string) => {
    console.log(path);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <Logo />
        <h6>Name</h6>
      </div>
      <ul>
        <li onClick={() => goTo("Projetos")}>
          Projetos<span>Projetos</span>
        </li>
        <li onClick={() => goTo("Sobre Mim")}>
          Sobre Mim<span>Sobre Mim</span>
        </li>
        <li onClick={() => goTo("Contato")}>
          Contato<span>Contato</span>
        </li>
      </ul>
    </nav>
  );
};
