import { getRandomNumber } from "./getRandomNumber";

export class Colors {
  static sortedColors = [
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
      return Colors.sortedColors[getRandomNumber(lastIndex, middleIndex)];
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
