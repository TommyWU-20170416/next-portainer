import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nextPublicEmail = process.env.NEXT_PUBLIC_EMAIL;
  const email = process.env.email;

  res.status(200).json({ nextPublicEmail, email });
}