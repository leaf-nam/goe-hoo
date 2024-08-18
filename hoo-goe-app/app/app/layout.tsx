import type {Metadata} from "next";
import Footer from "../components/footer";
import NavHeader from "../components/navheader";

export const metadata: Metadata = {
  title: "House Of Ong R",
  description: "Get your Record.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="fixed md:top-5 top-0 right-0 w-1/2">
        <NavHeader />
      </div>
      <main className="text-xs">{children}</main>
      <Footer />
    </div>
  );
}
