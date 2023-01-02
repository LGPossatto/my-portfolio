import { createContext, FC, useReducer } from "react";

import { projectsTypes } from "./projectsTypes";
import { ProjectsReducer } from "./ProjectsReducer";

import { IFav, IProjectsInfo } from "../../data/projects";

interface props {
  children: React.ReactNode;
}

export interface IProjectsState {
  projects: IProjectsInfo[];
  projectsFav: IFav[];
  projectsInfo: { [x: string]: IProjectsInfo };
}

interface IProjectsContext extends IProjectsState {
  getFavProjects: () => Promise<void>;
  getProjectById: (id: string) => Promise<void>;
}

export const ProjectsContext = createContext<IProjectsContext>({
  projects: [],
  projectsFav: [],
  projectsInfo: {},
  getFavProjects: async () => {},
  getProjectById: async () => {},
});

export const ProjectsProvider: FC<props> = ({ children }) => {
  const inicialState: IProjectsState = {
    projects: [],
    projectsFav: [],
    projectsInfo: {},
  };
  const originUrl =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const [state, dispatch] = useReducer(ProjectsReducer, inicialState);

  const getFavProjects = async () => {
    if (state.projectsFav.length > 0) return;

    const res = await fetch(`${originUrl}/api/projects`);
    const data = await res.json();

    if (data.status === "ok")
      dispatch({ type: projectsTypes.GET_FAV_PROJECTS, payload: data.data });
  };

  const getProjectById = async (id: string) => {
    if (state.projectsInfo[id]) return;

    const res = await fetch(`${originUrl}/api/projects/${id}`);
    const data = await res.json();

    if (data.status === "ok")
      dispatch({ type: projectsTypes.GET_PROJECT_BY_ID, payload: data.data });
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects: state.projects,
        projectsFav: state.projectsFav,
        projectsInfo: state.projectsInfo,
        getFavProjects,
        getProjectById,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
