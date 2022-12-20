import styles from "../styles/components/ProjectItem.module.scss";

interface props {
  title: string;
  desc: string;
  date: string;
}

export const ProjectItem = ({ title, desc, date }: props) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="date">{date}</span>
    </div>
  );
};
