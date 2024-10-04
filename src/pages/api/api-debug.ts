import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  console.log("Fetched Session using getSession:", session);

  if (!session) {
    return res.status(401).json({ message: "No session found" });
  }

  return res.status(200).json(session);
}