"use client";

import { db } from "../firebase";
import { PlusIcon } from "@heroicons/react/20/solid";
import { serverTimestamp } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };
  return (
    <div className="border-gray-700 border chatRow" onClick={createNewChat}>
      <PlusIcon className="h-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
