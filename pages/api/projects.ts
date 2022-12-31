// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IProjectsData, projectsData } from "../../data/projects";

type Data = {
  status: string;
  error: {
    type: string;
    message: string;
  } | null;
  data: IProjectsData[] | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    res.status(200).json({ status: "ok", error: null, data: projectsData });
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
