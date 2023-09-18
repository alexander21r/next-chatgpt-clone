"use client";

import { db } from "@/firebase";
import { query, collection, orderBy } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useEffect } from "react";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const { data: session } = useSession();

  const [messages, loading, error] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth"
      onClick={() => window.scrollTo(0, 1000)}>
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt below to get started
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
