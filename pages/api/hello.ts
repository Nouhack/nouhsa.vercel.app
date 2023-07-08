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
  if (req.method === "POST") {
    // Process a POST request
    const email = req.body.email.toString();
    const body = req.body.body.toString();
    const created_by = req.body.created_by.toString();

    const new_guestbook = await queryBuilder
      .insertInto("guestbook")
      .values({ email, body, created_by })
      .execute();

    //revalidatePath("/guestbook");

    res.status(200).json({ data: "success" });
  }
  if (req.method === "GET") {
    // Process a GET request
    const data = await queryBuilder
      .selectFrom("guestbook")
      .select(["id", "body", "created_by", "updated_at"])
      .orderBy("updated_at", "desc")
      .limit(100)
      .execute();

    res.status(200).json({ data });
  }
}
