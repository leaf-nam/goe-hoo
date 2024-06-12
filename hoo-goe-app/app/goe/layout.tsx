import type {Metadata} from "next";
import Sidebar from "../components/sidebar";
import NavHeader from "../components/navheader";

export const metadata: Metadata = {
  title: "Get Your Record",
  description: "Get your Record.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-h-[20vh] ">
        <NavHeader />
      </div>
      <main className="flex gap-10 justify-around max-h-[80vh]">
        <Sidebar />
        <section className="flex-auto">{children}</section>
      </main>
    </div>
  );
}
