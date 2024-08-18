import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Logo from "./components/logo";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "House Of Ong R",
  description: "Get your Record.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <main className="h-screen container mx-auto flex flex-col justify-around">{children}</main>
      </body>
    </html>
  );
}
