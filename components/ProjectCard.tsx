import styles from "../styles/components/ProjectCard.module.scss";

interface props {
  colorNum?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export const ProjectCard = ({ colorNum = 0 }: props) => {
  const gradientList = [
    "#1400ff, #00cfff",
    "#29f000, #00e5f0",
    "#8000ff, #ff009b",
    "#f01700, #ea00d0",
    "#2323d5, #9216ca",
    "#f00044, #ffef00",
    "#00cc6c, #ece800",
  ];

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(to top right, ${gradientList[colorNum]})`,
      }}
    >
      <h3>Name name name</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};
