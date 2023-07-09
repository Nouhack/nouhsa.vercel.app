// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { queryBuilder } from "../../lib/planetscale";
//import { revalidatePath } from "next/cache";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    // Process a GET request

    res.status(200).json({ data: process.env.DATABASE_URL });
  }
}
