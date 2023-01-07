import styles from "../../styles/components/misc/IconText.module.scss";

interface props {
  Icon: any;
  text: string;
}

export const IconText = ({ Icon, text }: props) => {
  return (
    <div className={styles.container}>
      <Icon></Icon>
      <h6>{text}</h6>
    </div>
  );
};
