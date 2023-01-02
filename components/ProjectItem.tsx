import styles from "../styles/components/ProjectItem.module.scss";
import { DateBlock } from "./DateBlock";

interface props {
  title: string;
  desc: string;
  date: string;
  href: string;
}

export const ProjectItem = ({ title, desc, date, href }: props) => {
  return (
    <a href={href} target="_blank" className={styles.container}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <DateBlock date={date}></DateBlock>
    </a>
  );
};
