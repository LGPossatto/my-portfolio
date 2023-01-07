import Link from "next/link";

import { Colors } from "../../utils/Colors";

import styles from "../../styles/components/projects/ProjectFavCard.module.scss";

interface props {
  id: string;
  title: string;
  desc: string;
  colorNum?: number;
}

export const ProjectsFavCard = ({ title, desc, id, colorNum = 0 }: props) => {
  return (
    <Link
      href={`/projetos/${id}`}
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(to top right, ${Colors.getGradient(
          colorNum
        )})`,
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  );
};
