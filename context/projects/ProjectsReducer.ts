import { IProjectsState } from "./ProjectsContext";
import { projectsTypes } from "./projectsTypes";

export const ProjectsReducer = (
  state: IProjectsState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case projectsTypes.GET_PROJECTS:
      return { ...state, projects: [...state.projects, ...payload] };
    default:
      return state;
  }
};
