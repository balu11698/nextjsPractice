// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllEmployees } from "../../database/controller/employee.js";
import Cors from "cors";
import corsOptions from "../../database/config/corsOptions.js";
import middleware from "../../database/middlware/middleware.js";
import axios from "axios";

const cors = Cors(corsOptions);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // await middleware(req, res, cors);
  return getAnimeData(req, res);
  // const response = await axios.get(
  //   "https://api.jikan.moe/v4/seasons/now?page=1"
  // );
  // return res.send(response.data);
}

const getAnimeData = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const data = await axios.get("https://api.jikan.moe/v4/seasons/now?page=1");
    res.json(data.data);
  } catch (err) {
    res.status(400).json({ message: "Failed" });
  }
};
