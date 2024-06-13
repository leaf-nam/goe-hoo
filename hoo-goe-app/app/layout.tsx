import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

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
        <main className="h-screen container mx-auto border-4 border-slate-700 flex flex-col justify-around">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
