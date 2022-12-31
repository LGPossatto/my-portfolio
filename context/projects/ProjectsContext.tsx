import { createContext, FC, useReducer } from "react";

import { projectsTypes } from "./projectsTypes";
import { ProjectsReducer } from "./ProjectsReducer";

interface props {
  children: React.ReactNode;
}

export interface IProjectsState {
  projects: { title: string; desc: string }[];
}

interface IProjectsContext {
  projects: { title: string; desc: string }[];
  getProjects: () => Promise<void>;
}

export const ProjectsContext = createContext<IProjectsContext>({
  projects: [],
  getProjects: async () => {},
});

export const ProjectsProvider: FC<props> = ({ children }) => {
  const inicialState: IProjectsState = { projects: [] };
  const originUrl =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const [state, dispatch] = useReducer(ProjectsReducer, inicialState);

  const getProjects = async () => {
    const res = await fetch(`${originUrl}/api/projects`);
    const data = await res.json();

    console.log(data.data);

    dispatch({ type: projectsTypes.GET_PROJECTS, payload: data.data });
  };

  return (
    <ProjectsContext.Provider value={{ projects: state.projects, getProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
