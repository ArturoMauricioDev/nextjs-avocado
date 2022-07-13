import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database";

const avocado = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;
  const db = new Database();
  const entry = await db.getById(id as string);

  // response.statusCode = 200;
  // response.setHeader("Content-type", "application/json");
  // response.end(
  //   JSON.stringify({
  //     data: entry,
  //   })
  // );
  response.status(200).json(entry);
};

export default avocado;
