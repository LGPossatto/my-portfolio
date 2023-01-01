interface props {
  date?: string;
}

export const DateBlock = ({ date }: props) => {
  return <span>{date ? date : "??/??/????"}</span>;
};
