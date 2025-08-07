import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Logo from "./components/logo";
import Link from "next/link";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "EDIT CHAEROK",
  description: "Get your Record.",
  icons: {
    icon: "/images/logo.png",
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
        <GoogleAnalytics gaId="G-EHXQMC9LP4" />
        <GoogleTagManager gtmId="GTM-KRMM4TJ8" />
      </body>
    </html>
  );
}
