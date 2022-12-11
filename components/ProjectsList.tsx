import styles from "../styles/components/ProjectsList.module.scss";

export const ProjectsList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>
          Name name name Name name name Name Name name name Name Name name name
          Name Name name name Name name name
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <span className="date">12/07/2007</span>
      </div>
      <div className={styles.card}>
        <h3>Name name name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <span className="date">12/07/2007</span>
      </div>
      <div className={styles.card}>
        <h3>Name name name</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span className="date">12/07/2007</span>
      </div>
    </div>
  );
};
