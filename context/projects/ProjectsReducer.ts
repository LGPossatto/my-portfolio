import { IProjectsState } from "./ProjectsContext";
import { projectsTypes } from "./projectsTypes";

export const ProjectsReducer = (
  state: IProjectsState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case projectsTypes.GET_FAV_PROJECTS:
      return { ...state, projectsFav: [...payload] };
    case projectsTypes.GET_PROJECT_BY_ID:
      return {
        ...state,
        projectsInfo: { ...state.projectsInfo, [payload.id]: payload },
      };
    case projectsTypes.GET_REST_PROJECTS:
      return { ...state, projectsRest: [...payload] };
    default:
      return state;
  }
};
