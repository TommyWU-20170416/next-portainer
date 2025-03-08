import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const secretKey = process.env.SECRET_KEY;

  console.log("SECRET_KEY:", secretKey); // Log the SECRET_KEY to the server console
  res.status(200).json({ message: secretKey });
}
