import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth/next";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "ChatGPT Clone",
  description: "ChatGPT Clone made with Next.js",
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="sm:flex">
              <div className="bg-[#202123]  h-screen overflow-y-auto md:min-w-[20rem] ">
                <SideBar />
              </div>
              <ClientProvider />
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
