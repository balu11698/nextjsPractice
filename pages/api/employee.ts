// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getAnimeData,
  getAllEmployees,
} from "../../database/controller/employee";
import Cors from "cors";
import corsOptions from "../../database/config/corsOptions";
import middleware from "../../database/middlware/middleware";
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
