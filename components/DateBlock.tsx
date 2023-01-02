import DangerIcon from "../assets/icons/triangle-exclamation-solid.svg";
import AttetionIcon from "../assets/icons/circle-exclamation-solid.svg";
import CheckIcon from "../assets/icons/circle-check-solid.svg";

import styles from "../styles/components/DateBlock.module.scss";

interface props {
  date?: string;
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

  const getIcon = (date: string) => {
    const diffDays = Math.floor(
      (dateToUTC(new Date()) - dateToUTC(new Date(date))) /
        (24 * 60 * 60 * 1000)
    );

    // ignoring leap years
    if (diffDays >= 365) {
      return <DangerIcon></DangerIcon>;
    } else if (diffDays >= 183) {
      return <AttetionIcon></AttetionIcon>;
    } else {
      return <CheckIcon></CheckIcon>;
    }
  };

  return (
    <span className={styles.container}>
      {getIcon(date!)}
      {date ? date : "??/??/????"}
    </span>
  );
};
