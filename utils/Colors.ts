import { getRandomNumber } from "./getRandomNumber";

export class Colors {
  static sortedColors = [
    "#8300e8",
    "#1290ff",
    "#00daf2",
    "#00e8a3",
    "#04e600",
    "#8be800",
    //   /\-cold
    //   \/-hot
    "#e6d300",
    "#eb4700",
    "#eb0000",
    "#ed005f",
    "#ed00dd",
  ];
  static gradientColors = [
    "#1400ff, #00cfff",
    "#27e300, #00e5f0",
    "#8000ff, #ff009b",
    "#f01700, #ea00d0",
    "#2323d5, #9216ca",
    "#f00044, #f7e700",
    "#00cc6c, #ece800",
  ];

  constructor() {
    if (this instanceof Colors) {
      throw Error("A static class cannot be instantiated.");
    }
  }

  static getRandomColor = (temp?: "hot" | "cold") => {
    const lastIndex = Colors.sortedColors.length - 1;
    const middleIndex = Math.ceil(lastIndex / 2);

    if (temp === "cold") {
      return Colors.sortedColors[getRandomNumber(middleIndex)];
    } else if (temp === "hot") {
      return Colors.sortedColors[getRandomNumber(lastIndex, middleIndex + 1)];
    } else {
      return Colors.sortedColors[getRandomNumber(lastIndex)];
    }
  };

  static getGradient = (index = 0) => {
    if (index < 0 || index >= Colors.gradientColors.length) {
      throw new Error(
        `Index out of bounds. Min: ${0} - Max ${
          Colors.gradientColors.length - 1
        }`
      );
    }

    return Colors.gradientColors[index];
  };
}
