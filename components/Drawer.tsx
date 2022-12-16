import CloseIcon from "../assets/icons/xmark-solid.svg";
import styles from "../styles/components/Drawer.module.scss";

interface props {
  drawerActive: boolean;
  openCloseDrawer: () => void;
  closeOnClick?: boolean;
  children?: React.ReactNode;
}

export const Drawer: React.FC<props> = ({
  drawerActive,
  openCloseDrawer,
  closeOnClick = false,
  children,
}: props) => {
  return (
    <div
      className={`${styles.container} ${
        drawerActive ? `${styles["drawer-active"]}` : ""
      }`}
    >
      <div className={styles.close} onClick={openCloseDrawer}>
        <CloseIcon></CloseIcon>
      </div>
      <div
        className={styles.children}
        onClick={() => {
          if (closeOnClick) openCloseDrawer();
        }}
      >
        {children}
      </div>
    </div>
  );
};
