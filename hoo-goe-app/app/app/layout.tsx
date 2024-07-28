import type {Metadata} from "next";
import NavHeader from "../components/navheader";

export const metadata: Metadata = {
  title: "Get Your Record",
  description: "Get your Record.",
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
      <main>{children}</main>
    </div>
  );
}
