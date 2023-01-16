// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IProjectsItems, projectsItems } from "../../../../data/projectsItems";

interface IData {
  status: string;
  error: {
    type: string;
    message: string;
  } | null;
  data: IProjectsItems[] | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  try {
    res.status(200).json({ status: "ok", error: null, data: projectsItems });
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
