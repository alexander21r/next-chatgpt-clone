import { query } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Prompt is required" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Chat ID is required" });
    return;
  }

  const response = await query(prompt, chatId, model, session);
}
