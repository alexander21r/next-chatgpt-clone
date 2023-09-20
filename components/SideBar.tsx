"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="hidden md:inline">
            <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2 my-2 ">
            {loading && (
              <div className="animate-pulse text-center text-white">
                Loading chats...
              </div>
            )}
            {chats?.docs.map((chat: any) => {
              return <ChatRow key={chat.id} id={chat.id} />;
            })}
          </div>
        </div>
      </div>
      {session && (
        <>
          <img
            src={session.user?.image!}
            alt="profile pricture"
            className="h-12 w-12 rounded-full  mx-auto mb-2 "
          />
          <button
            className="text-white font-bold bg-gray-700 w-fit  mx-auto p-1 rounded hover:opacity-50"
            onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )}
    </div>
  );
}

export default SideBar;
