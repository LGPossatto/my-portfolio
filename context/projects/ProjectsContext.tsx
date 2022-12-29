import { createContext, FC, useReducer } from "react";
import { ProjectsReducer } from "./ProjectsReducer";

interface props {
  children: React.ReactNode;
}

export interface IProjectsState {
  projects: { title: string; desc: string }[];
}

export const ProjectsContext = createContext<IProjectsState>({
  projects: [],
});

export const ProjectsProvider: FC<props> = ({ children }) => {
  const inicialState: IProjectsState = { projects: [] };

  const [state, dispatch] = useReducer(ProjectsReducer, inicialState);

  return (
    <ProjectsContext.Provider value={{ projects: state.projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
