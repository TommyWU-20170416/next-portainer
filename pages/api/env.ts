import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nextPublicEmail = process.env.NEXT_PUBLIC_EMAIL;
  const email = process.env.email;

  console.log('NEXT_PUBLIC_EMAIL:', nextPublicEmail); // Log the NEXT_PUBLIC_EMAIL to the server console
  console.log('EMAIL:', email); // Log the EMAIL to the server console

  res.status(200).json({ nextPublicEmail, email });
}