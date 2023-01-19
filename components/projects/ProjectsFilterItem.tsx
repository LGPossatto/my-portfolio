import { useContext } from "react";

import { FilterContext } from "../../context/filter/FilterContext";

import Unknown from "../../assets/icons/unknown.svg";
import HTML from "../../assets/icons/html.svg";
import CSS from "../../assets/icons/css.svg";
import Sass from "../../assets/icons/sass.svg";
import Javascript from "../../assets/icons/javascript.svg";
import Typescript from "../../assets/icons/typescript.svg";
import ReactIcon from "../../assets/icons/react.svg";
import Jest from "../../assets/icons/jest.svg";
import Node from "../../assets/icons/nodejs.svg";
import Next from "../../assets/icons/nextjs.svg";
import MongoDB from "../../assets/icons/mongodb.svg";
import Firebase from "../../assets/icons/firebase.svg";
import GraphQL from "../../assets/icons/graphql.svg";
import Android from "../../assets/icons/android.svg";
import Kotlin from "../../assets/icons/kotlin.svg";
import Dart from "../../assets/icons/dart.svg";
import Flutter from "../../assets/icons/flutter.svg";

import styles from "../../styles/components/projects/ProjectsFilterItem.module.scss";
import { Checkbox } from "../inputs/Checkbox";

interface props {
  name: string;
  onItemClick: (key: string) => void;
}

export const ProjectsFilterItem = ({ name, onItemClick }: props) => {
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
