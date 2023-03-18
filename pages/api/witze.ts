import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}

// http://localhost:3000/api/witze
// Path: pages/api/witze/[id].ts
