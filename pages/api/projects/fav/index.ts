// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  IFav,
  projectsData,
  projectsFavIdList,
} from "../../../../data/projectsData";

interface IData {
  status: string;
  error: {
    type: string;
    message: string;
  } | null;
  data: IFav[] | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  try {
    const fav: IFav[] = [];
    for (let i = 0; i < projectsFavIdList.length; i++) {
      let filteredProject;

      for (let j = 0; j < projectsData.length; j++) {
        if (projectsData[j].id === projectsFavIdList[i]) {
          filteredProject = {
            id: projectsData[j].id,
            title: projectsData[j].title,
            desc: projectsData[j].desc,
            techList: projectsData[j].techList,
          };
          fav.push(filteredProject);
          break;
        }
      }
    }

    res.status(200).json({ status: "ok", error: null, data: fav });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: {
        type: "Server error",
        message: "Error trying to send projects data",
      },
      data: null,
    });
  }
}
