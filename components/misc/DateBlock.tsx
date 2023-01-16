import DangerIcon from "../../assets/icons/triangle-exclamation-solid.svg";
import AttetionIcon from "../../assets/icons/circle-exclamation-solid.svg";
import CheckIcon from "../../assets/icons/circle-check-solid.svg";

import styles from "../../styles/components/misc/DateBlock.module.scss";

interface props {
  date?: Date;
}

export const DateBlock = ({ date }: props) => {
  const dateToUTC = (date: Date) => {
    return Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
  };

  const getIcon = (date: Date) => {
    const diffDays = Math.floor(
      (dateToUTC(new Date()) - dateToUTC(date)) / 86400000
    );

    // ignoring leap years
    if (diffDays >= 548) {
      return <DangerIcon></DangerIcon>;
    } else if (diffDays >= 274) {
      return <AttetionIcon></AttetionIcon>;
    } else {
      return <CheckIcon></CheckIcon>;
    }
  };

  return (
    <span className={styles.container}>
      <p>
        {getIcon(date!)}
        {date ? date.toLocaleDateString() : "??/??/????"}
      </p>
      <div className={styles.tooltip}>
        <div>
          <DangerIcon></DangerIcon> - Projeto muito antigo.
        </div>
        <div>
          <AttetionIcon></AttetionIcon> - Projeto antigo.
        </div>
        <div>
          <CheckIcon></CheckIcon> - Projeto recente.
        </div>
      </div>
    </span>
  );
};
