import { useContext } from "react";

import { FilterContext } from "../context/filter/FilterContext";

import Unknown from "../public/assets/icons/unknown.svg";
import HTML from "../public/assets/icons/html.svg";
import CSS from "../public/assets/icons/css.svg";
import Sass from "../public/assets/icons/sass.svg";
import Javascript from "../public/assets/icons/javascript.svg";
import Typescript from "../public/assets/icons/typescript.svg";
import ReactIcon from "../public/assets/icons/react.svg";
import Jest from "../public/assets/icons/jest.svg";
import Node from "../public/assets/icons/nodejs.svg";
import Next from "../public/assets/icons/nextjs.svg";
import MongoDB from "../public/assets/icons/mongodb.svg";
import Firebase from "../public/assets/icons/firebase.svg";
import GraphQL from "../public/assets/icons/graphql.svg";
import Android from "../public/assets/icons/android.svg";
import Kotlin from "../public/assets/icons/kotlin.svg";
import Dart from "../public/assets/icons/dart.svg";
import Flutter from "../public/assets/icons/flutter.svg";

import styles from "../styles/components/FilterItem.module.scss";
import { Checkbox } from "./Checkbox";

interface props {
  name: string;
  onItemClick: (key: string) => void;
}

export const FilterItem = ({ name, onItemClick }: props) => {
  const { tags } = useContext(FilterContext);

  const getIcon = (name: string) => {
    switch (name) {
      case "HTML":
        return <HTML />;
      case "CSS":
        return <CSS />;
      case "Sass":
        return <Sass />;
      case "Javascript":
        return <Javascript />;
      case "Typescript":
        return <Typescript />;
      case "React":
        return <ReactIcon />;
      case "React_Native":
        return <ReactIcon />;
      case "Jest":
        return <Jest />;
      case "NodeJS":
        return <Node />;
      case "NextJS":
        return <Next />;
      case "MongoDB":
        return <MongoDB />;
      case "Firebase":
        return <Firebase />;
      case "GraphQL":
        return <GraphQL />;
      case "Android":
        return <Android />;
      case "Kotlin":
        return <Kotlin />;
      case "Dart":
        return <Dart />;
      case "Flutter":
        return <Flutter />;
      default:
        return <Unknown />;
    }
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        onItemClick(name);
      }}
    >
      <Checkbox active={tags[name]}></Checkbox>
      <div className={styles.info}>
        <p>{name}</p>
        {getIcon(name)}
      </div>
    </div>
  );
};
