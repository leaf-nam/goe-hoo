import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "HOO & GOE",
  description: "Get your Record.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen container mx-auto border-4 border-slate-700 flex flex-col justify-between">{children}</main>
      </body>
    </html>
  );
}
