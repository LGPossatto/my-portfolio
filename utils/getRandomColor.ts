import { getRandomNumber } from "./getRandomNumber";

export const getRandomColor = () => {
  const colors = [
    "#ff0000",
    "#ff4d00",
    "#ffea00",
    "#b7ff00",
    "#04ff00",
    "#00ffb3",
    "#00e5ff",
    //"#004cff",
    "#4400ff",
    "#9000ff",
    "#ff00ee",
    "#ff0066",
  ];

  return colors[getRandomNumber(10)];
};
