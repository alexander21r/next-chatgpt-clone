import { adminDb } from "@/firebaseAdmin";
import query from "../../../lib/queryApi";
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

type Data = {
  answer: string;
};

export async function POST(req: Request) {
  const { prompt, chatId, model, session } = await req.json();

  if (!prompt) {
    return NextResponse.json({ answer: "Prompt is required" }, { status: 400 });
  }
  if (!chatId) {
    return NextResponse.json(
      { answer: "Chat ID is required" },
      { status: 400 }
    );
  }
  const response = await query(prompt, model);

  const message: Message = {
    text: response || "Sorry, I don't know the answer to that question.",
    createdAt: admin.firestore.Timestamp.now(),
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
  return NextResponse.json({ answer: message.text }, { status: 200 });
}
