import styles from "../../styles/components/projects/ProjectsListItem.module.scss";
import { DateBlock } from "../misc/DateBlock";

interface props {
  title: string;
  desc: string;
  date: string;
  href: string;
}

export const ProjectsListItem = ({ title, desc, date, href }: props) => {
  return (
    <a href={href} target="_blank" className={styles.container}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <DateBlock date={date}></DateBlock>
    </a>
  );
};
