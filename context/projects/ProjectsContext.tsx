import { createContext, FC, useReducer } from "react";

import { projectsTypes } from "./projectsTypes";
import { ProjectsReducer } from "./ProjectsReducer";

import { IFav, IProjectsData } from "../../data/projectsData";
import { IProjectsItems } from "../../data/projectsItems";

export interface IProjectsState {
  projectsRest: IProjectsItems[];
  projectsFav: IFav[];
  projectsInfo: { [x: string]: IProjectsData };
}

interface IProjectsContext extends IProjectsState {
  getFavProjects: () => Promise<void>;
  getProjectById: (id: string) => Promise<void>;
  getRestProjects: () => Promise<void>;
}

export const ProjectsContext = createContext<IProjectsContext>({
  projectsRest: [],
  projectsFav: [],
  projectsInfo: {},
  getFavProjects: async () => {},
  getProjectById: async () => {},
  getRestProjects: async () => {},
});

interface props {
  children: React.ReactNode;
}

export const ProjectsProvider: FC<props> = ({ children }) => {
  const inicialState: IProjectsState = {
    projectsRest: [],
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

    const res = await fetch(`${originUrl}/api/projects/fav`);
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

  const getRestProjects = async () => {
    if (state.projectsRest.length > 0) return;

    const res = await fetch(`${originUrl}/api/projects/rest`);
    const data = await res.json();

    if (data.status === "ok")
      dispatch({ type: projectsTypes.GET_REST_PROJECTS, payload: data.data });
  };

  return (
    <ProjectsContext.Provider
      value={{
        projectsRest: state.projectsRest,
        projectsFav: state.projectsFav,
        projectsInfo: state.projectsInfo,
        getFavProjects,
        getProjectById,
        getRestProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
