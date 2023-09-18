import { adminDb } from "@/firebaseAdmin";
//import query from "../../lib/queryApi";
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
  const response = await query(prompt, model);

  const message: Message = {
    text: response || "Sorry, I don't know the answer to that question.",
    //createdAt: admin.firestore.TimeStap.now(),
    createdAt: "date",
    user: {
      _id: "Chatgpt",
      name: "Chatgpt",
      avatar: "https://i.imgur.com/7k12EPD.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session.user.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
  res.status(200).json({ answer: message.text });
}
