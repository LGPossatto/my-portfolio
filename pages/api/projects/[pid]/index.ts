// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IProjectsData, projectsData } from "../../../../data/projectsData";

interface IData {
  status: string;
  error: {
    type: string;
    message: string;
  } | null;
  data: IProjectsData | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  try {
    const { pid } = req.query;
    const projectInfo = projectsData.find((project) => project.id === pid);

    if (!projectInfo)
      throw new Error("The project ID is not valid or does not exist.");

    res.status(200).json({ status: "ok", error: null, data: projectInfo });
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
